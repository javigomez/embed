import { isMobile } from './mobile'

export const setMaxHeight = (element: HTMLElement) => {
  const mediaQuery = window.matchMedia('(max-width: 480px)')

  if (isMobile() && mediaQuery.matches) {
    element.style.maxHeight = `${window.innerHeight}px`
  }

  return element
}
