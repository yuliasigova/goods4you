import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { SearchBar } from './SearchBar'
import '@testing-library/jest-dom';

describe('SearchBar', () => {
    test('renders correctly', () => {
        render(<SearchBar value="" onChange={() => { }} onClick={() => { }} />)
        const inputElement = screen.getByPlaceholderText('Search by title')
        const buttonElement = screen.getByText('Search')

        expect(inputElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
    })

    test('calls onChange when input changes', () => {
        const handleChange = vi.fn()
        render(<SearchBar value="" onChange={handleChange} onClick={() => { }} />)
        const inputElement = screen.getByPlaceholderText('Search by title')

        fireEvent.change(inputElement, { target: { value: 'test' } })
        expect(handleChange).toHaveBeenCalledTimes(1)
    })

    test('calls onClick when button is clicked', () => {
        const handleClick = vi.fn()
        render(<SearchBar value="" onChange={() => { }} onClick={handleClick} />)
        const buttonElement = screen.getByText('Search')

        fireEvent.click(buttonElement)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
