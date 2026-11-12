import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Zangief from './Zangief'

describe('Zangief', () => {
  it('指定がなければ幅 32 で左右反転せずに表示する', () => {
    render(<Zangief />)

    const image = screen.getByRole('img', { name: 'Zangief' })
    expect(image).toHaveAttribute('width', '32')
    expect(image.style.transform).toBe('')
  })

  it('flip を指定すると左右反転して表示する', () => {
    render(<Zangief flip size={64} />)

    const image = screen.getByRole('img', { name: 'Zangief' })
    expect(image).toHaveAttribute('width', '64')
    expect(image).toHaveStyle({ transform: 'scaleX(-1)' })
  })

  it('action ごとに異なる画像を表示する', () => {
    const { rerender } = render(<Zangief action="stand" />)
    const standSrc = screen.getByRole('img').getAttribute('src')

    rerender(<Zangief action="walk" />)
    const walkSrc = screen.getByRole('img').getAttribute('src')

    expect(standSrc).toBeTruthy()
    expect(walkSrc).not.toBe(standSrc)
  })
})
