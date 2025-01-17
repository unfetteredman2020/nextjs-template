import { NextRequest, userAgent, NextResponse } from 'next/server'
import { isMobile } from '@/utils/getPlatform'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const ua = request.headers.get('user-agent')
  const isMob = isMobile(ua)
  const { device } = userAgent(request)
  const viewport = device.type === 'mobile' || isMob ? 'mobile' : 'desktop'
  url.searchParams.set('viewport', viewport)
  return NextResponse.rewrite(url)
}
