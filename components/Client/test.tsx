'use client'
import React from 'react'
import Script, { ScriptProps } from 'next/script'
import { type PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  scripts: ScriptProps[]
}

function DynamicComponentWithScript({ scripts, children }: Props) {
  return (
    <>
      {scripts.map((script, index) => {
        return <Script {...script} key={index} />
      })}
      {children}
    </>
  )
}

export default DynamicComponentWithScript
