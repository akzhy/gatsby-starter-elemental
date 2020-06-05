import React from "react"

// Stolen from https://github.com/rrutsche/react-parallax
export function canUseDOM() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

type ParallaxProps = { changePercentage: ({ percentage: number }) => void };
export default class Parallax extends React.Component<ParallaxProps> {

    node: React.RefObject<HTMLDivElement>;
    timestamp: number;
    canUseDom: boolean;
    
    constructor(props) {
        super(props)

        this.node = React.createRef()
        this.timestamp = 0
        this.canUseDom = canUseDOM();
        this.state = {
            percentage: 0,
        }
    }

    getWindowHeight = () => {
        const w = window
        const d = document
        const e = d.documentElement
        const g = d.getElementsByTagName("body")[0]

        return w.innerHeight || e.clientHeight || g.clientHeight
    }

    getWindowWidth = () => {
        const w = window
        const d = document
        const e = d.documentElement
        const g = d.getElementsByTagName("body")[0]

        return w.innerWidth || e.clientWidth || g.clientWidth
    }

    isScrolledIntoView = (element, offset = 0, useDOM: boolean) => {
      if (!useDOM) {
        return false;
      }
      const elementTop = element.getBoundingClientRect().top - offset;
      const elementBottom = element.getBoundingClientRect().bottom + offset;
      return elementTop <= this.getWindowHeight() && elementBottom >= 0;
  };

    onScroll = () => {
        const stamp = Date.now()
        if (
            stamp - this.timestamp >= 20 &&
            this.isScrolledIntoView(this.node.current, 100, this.canUseDom)
        ) {
            this.props.changePercentage({
                percentage: 1 - this.getRelativePosition(this.node.current, this.canUseDom),
            })
            this.timestamp = stamp
        }
    }

    getPercentage = (startpos: number, endpos: number, currentpos: number) => {
        const distance = endpos - startpos;
        const displacement = currentpos - startpos;
        return displacement / distance || 0;
    };

    getRelativePosition = (node: HTMLElement, useDOM: boolean) => {
        if (!useDOM) {
          return 0;
        }
        const element = node
        const { top, height } = element.getBoundingClientRect()
        const parentHeight = this.getNodeHeight(element)
        const maxHeight = height > parentHeight ? height : parentHeight
        const y = Math.round(top > maxHeight ? maxHeight : top)

        return this.getPercentage(-height, maxHeight, y)
    }

    getNodeHeight(node: HTMLElement | Document) {
        if (!node || !("clientHeight" in node)) {
            return this.getWindowHeight()
        }

        return node.clientHeight
    }

    componentDidMount() {
        if (this.getWindowWidth() > 1024) {
            window.addEventListener("scroll", this.onScroll)
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll)
    }

    render() {
        return <div ref={this.node}>{this.props.children}</div>
    }
}
