import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
 
test('Propsがない場合はデフォルト文字列が表示される', () => {
    render(<Header />)
    screen.debug()
})