import React from "react"

type SideBarState = { touchDown?: boolean, sidebarOpen?: boolean, opening?: boolean, progress?: number, touchX?: number, touchTime?: number, lastTouch?: number, transitionTime?: number, screenWidth?: number };
type SettingsProps = { sensitivity?: number; overlayColor?: string; sidebarWidth?: string; swipeDistance?: number; }
type SideBarProps = { settings?: SettingsProps, open: boolean, onChange: Function };

export default class SideBar extends React.Component<SideBarProps, SideBarState>{
    
    sidebarParent: React.RefObject<HTMLDivElement>;
    sidebarOverlay: React.RefObject<HTMLDivElement>;
    open: boolean;
    settings: SettingsProps;

    constructor(props){
        super(props);

        this.state = {
            touchDown: false,
            sidebarOpen: false,
            progress: 0,
            touchX: 0,
            touchTime: 0,
            lastTouch: 0,
            transitionTime: 0
        };

        this.sidebarParent = React.createRef();
        this.sidebarOverlay = React.createRef();

        this.open = false;

        this.settings = {
            sensitivity: 50,
            overlayColor: "#000",
            sidebarWidth: "70%",
            swipeDistance: 40
        }

        if(this.props.settings){
            for (let key in this.props.settings){
                if(this.props.settings.hasOwnProperty(key)){
                    if(this.settings.hasOwnProperty(key)){
                        this.settings[key] = this.props.settings[key];
                    }
                }
            }
        }
    }

    touchStart = (e) => {
        let s: SideBarState = {
            touchX: e.touches[0].pageX,
            lastTouch: e.touches[0].pageX,
            touchTime: new Date().getTime()
        }
        if(!this.state.sidebarOpen && s.touchX < this.settings.sensitivity){
            s.opening = true;
            s.touchDown = true;
        } else if(this.state.sidebarOpen){
            s.opening = false;
            s.touchDown = true;
        }
        this.setState(s);
    }

    touchMove = (e) => {
        if(this.state.touchDown){
            if(this.state.opening){
                this.sidebarParent.current.style.transitionDuration = "0s"
                this.sidebarOverlay.current.style.transitionDuration = "0s"

                let progress = (e.touches[0].pageX/(this.state.screenWidth*.7))*100;
                progress = Math.min(100,progress);

                this.changeSidebarState(progress === 100 ? "open" : progress === 0 ? "close" : "",{
                    progress: progress,
                    lastTouch: e.touches[0].pageX,
                    sidebarOpen: progress === 100 ? true : progress === 0 ? false : this.state.progress
                });

            } else {
                let diff = this.state.touchX - e.touches[0].pageX;
                if(diff > 0){
                    this.sidebarParent.current.style.transitionDuration = "0s"
                    this.sidebarOverlay.current.style.transitionDuration = "0s"

                    let progress = 100 - Math.min(100, diff/2);

                    this.changeSidebarState(progress === 100 ? "open" : progress === 0 ? "close" : "",{
                        progress: progress,
                        lastTouch: e.touches[0].pageX,
                        sidebarOpen: progress === 100 ? true : progress === 0 ? false : this.state.progress
                    });
                }
            }
        }
    }

    touchEnd = (e) => {
        if(this.state.touchDown){
            if(this.state.progress > 80){
                this.openSidebar();
            }else {
                this.closeSidebar();
            }
            this.setState({
                touchDown: false
            })
        }

        if(this.state.lastTouch > this.state.touchX){
            let time = new Date().getTime()-this.state.touchTime;
            let distance = this.state.lastTouch-this.state.touchX;
            let vel = distance/time;
            if(vel > 0.6){
                this.openSidebar()
            }
        }
    }

    changeSidebarState = (arg, st={}) => {
        if(arg === "open"){
            this.setState({
                progress: 100,
                sidebarOpen: true,
                ...st
            });
            if(this.props.onChange){
                this.props.onChange(true);
            }
        }else if(arg === "close") {
            this.setState({
                progress: 0,
                sidebarOpen: false,
                ...st
            })
            if(this.props.onChange){
                this.props.onChange(false);
            }
        } else {
            this.setState(st);
        }
    }

    openSidebar = () => {
        let remaining = 100 - this.state.progress;
        this.sidebarParent.current.style.transitionDuration = `${remaining/500}s`;
        this.sidebarOverlay.current.style.transitionDuration = `${remaining/500}s`;
        this.changeSidebarState("open");
    }

    closeSidebar = () => {
        let remaining = this.state.progress;
        this.sidebarParent.current.style.transitionDuration = `${remaining/250}s`;
        this.sidebarOverlay.current.style.transitionDuration = `${remaining/250}s`;
        this.changeSidebarState("close");
    }

    resizeWindow = () => {
        this.setState({
            screenWidth: window.screen.availWidth
        })
    }

    componentDidMount(){
        window.addEventListener("touchstart",this.touchStart);
        window.addEventListener("touchend",this.touchEnd);
        window.addEventListener("touchmove",this.touchMove);
        window.addEventListener("resize", this.resizeWindow);

        this.setState({
            screenWidth: window.screen.availWidth
        })
    }

    componentDidUpdate(){
            if(this.props.open){
                if(!this.state.sidebarOpen){
                    this.openSidebar();
                }
            }else if(this.props.open === false){
                if(this.state.sidebarOpen){
                    this.closeSidebar();
                }
            }
            this.open = this.props.open;
    }

    componentWillUnmount(){
        window.removeEventListener("touchstart",this.touchStart);
        window.removeEventListener("touchend",this.touchEnd);
        window.removeEventListener("touchmove",this.touchMove);
        window.removeEventListener("resize",this.resizeWindow);
    }

    render(){
        return(
            <div className="r-swipe-sidebar-container" style={{
                position: "absolute"
            }}>
                <div className="r-swipe-sidebar" ref={this.sidebarParent} style={{
                    position: "fixed",
                    left: `${this.state.progress-100}%`,
                    width: this.settings.sidebarWidth,
                    height: "100%",
                    top: 0,
                    zIndex: 9999,
                    transitionProperty: "left",
                    transitionDuration: this.state.transitionTime+"s",
                    transitionTimingFunction: "linear",
                    transform: "translate3d(0,0,0)"
                }}>
                    {this.props.children}
                </div>
                <div 
                    className="r-swipe-sidebar-overlay"
                    ref={this.sidebarOverlay}
                    role="button"
                    tabIndex={-1}
                    style={{
                        position: "fixed",
                        top: 0,
                        bottom: 0,
                        left: this.state.progress === 0 ? "-100%" : "0%",
                        width: "100%",
                        height: "100%",
                        background: "#000",
                        zIndex: 9998,
                        transitionProperty: "opacity",
                        transitionDuration: "0s",
                        opacity: `${this.state.progress/200}`
                    }}
                    onClick={this.closeSidebar}
                    onKeyPress={(e) => {
                        if(e.which === 27) this.closeSidebar();
                    }}
                >

                </div>
            </div>
        )
    }
}
