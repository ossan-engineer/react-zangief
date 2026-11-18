import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Vitest の globals を使わない設定では Testing Library の自動 cleanup が働かないため
afterEach(cleanup)
