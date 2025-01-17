'use client'
import dynamic from 'next/dynamic'

const ScriptTpl = dynamic(() => import('./test'), { ssr: false })

export default ScriptTpl
