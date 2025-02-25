export const isMobile = (userAgent?: string | null) => {
  if (userAgent) {
    return !!userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  }
  return !!navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
}

export const isPad = (userAgent?: string) => {
  if (userAgent) {
    return !!userAgent.match(/(pad|iPad|Android.+Tablet)/i)
  }
  return !!navigator.userAgent.match(/(pad|iPad|Android.+Tablet)/i)
}
