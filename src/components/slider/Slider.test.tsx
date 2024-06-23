import { render, screen, fireEvent } from '@testing-library/react';
import { Slider } from './Slider';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

const imageList = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg'
];

describe('Slider component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test('renders correctly', () => {
    render(<Slider imageList={imageList} />);
    
    const mainImage = screen.getByAltText(/большое изображение товара/i);
    expect(mainImage).toHaveAttribute('src', imageList[0]);

    const thumbnails = screen.getAllByAltText('изображение товара');
    expect(thumbnails).toHaveLength(imageList.length);
  });

  test('changes image on thumbnail click', () => {
    render(<Slider imageList={imageList} />);
    
    let mainImage = screen.getByAltText('Большое изображение товара');
    expect(mainImage).toHaveAttribute('src', imageList[0]);

    const secondThumbnail = screen.getAllByAltText('изображение товара')[1];
    fireEvent.click(secondThumbnail);

    mainImage = screen.getByAltText('Большое изображение товара');
    expect(mainImage).toHaveAttribute('src', imageList[1]);
  });

  test('does not change image on clicking the same thumbnail', () => {
    render(<Slider imageList={imageList} />);
    
    let mainImage = screen.getByAltText('Большое изображение товара');
    expect(mainImage).toHaveAttribute('src', imageList[0]);

    const firstThumbnail = screen.getAllByAltText('изображение товара')[0];
    fireEvent.click(firstThumbnail);

    mainImage = screen.getByAltText('Большое изображение товара');
    expect(mainImage).toHaveAttribute('src', imageList[0]);
  });
});
