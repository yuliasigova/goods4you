interface Icon {
    name: string;
    width?: number;
    height?: number;
  }
  
export const Icon = ({ name, width, height }: Icon): React.ReactElement =>  {
    return (
      <svg width={width} height={height}>
        <use href={`src/shared/assets/img/sprite.svg#${name}`} />
      </svg>
    );
  }