export const filters = [
  {
    id: 1,
    value: 'original',
    label: 'Original',
    func: (ctx, originalPiwels) => ctx.putImageData(originalPiwels, 0, 0),
  },
  {
    id: 2,
    value: 'rgbSplit',
    label: 'RGB Split',
    func: (ctx, originalPiwels) => {
      ctx.putImageData(originalPiwels, 0, 0);

      const { width, height } = ctx.canvas;
      const pixels = ctx.getImageData(0, 0, width, height);

      const { data } = pixels;
      for (let i = 0; i < data.length; i += 4) {
        data[i - 50] = data[i + 0]; // RED
        data[i + 200] = data[i + 1]; // GREEN
        data[i - 250] = data[i + 2]; // Blue
      }
      ctx.putImageData(pixels, 0, 0);
    },
  },
  {
    id: 3,
    value: 'grayScale',
    label: 'Gray Scale',
    func: (ctx, originalPiwels) => {
      ctx.putImageData(originalPiwels, 0, 0);

      const { width, height } = ctx.canvas;
      const pixels = ctx.getImageData(0, 0, width, height);
      const { data } = pixels;
      for (let i = 0; i < pixels.data.length; i += 4) {
        const grayscale = data[i] * 0.3 + data[i + 1] * 0.6 + data[i + 2] * 0.1;
        data[i + 0] = grayscale; // r
        data[i + 1] = grayscale; // g
        data[i + 2] = grayscale; // b
      }
      ctx.putImageData(pixels, 0, 0);
    },
  },
  {
    id: 4,
    value: 'nos',
    label: 'Nostalgia',
    func: (ctx, originalPiwels) => {
      ctx.putImageData(originalPiwels, 0, 0);

      const { width, height } = ctx.canvas;
      const pixels = ctx.getImageData(0, 0, width, height);
      const { data } = pixels;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i + 0];
        const g = data[i + 1];
        const b = data[i + 2];

        data[i + 0] = r * 0.5 + g * 0.72 + b * 0.35;
        data[i + 1] = r * 0.28 + g * 0.63 + b * 0.28;
        data[i + 2] = r * 0.17 + g * 0.69 + b * 0.13;
      }
      ctx.putImageData(pixels, 0, 0);
    },
  },
  {
    id: 5,
    value: 'mosaic',
    label: 'Mosaic',
    func: (ctx, originalPiwels) => {
      ctx.putImageData(originalPiwels, 0, 0);

      const { width, height } = ctx.canvas;
      const pixels = ctx.getImageData(0, 0, width, height);

      const { data } = pixels;

      const blur = 12; // 马赛克范围
      const blurR = 2 * blur + 1;
      const total = blurR * blurR;

      for (let i = blur; i <= width; i += blurR) {
        for (let j = blur; j <= height; j += blurR) {
          let r = 0;
          let g = 0;
          let b = 0;
          for (let leny = -blur; leny <= blur; leny += 1) {
            for (let lenx = -blur; lenx <= blur; lenx += 1) {
              r += data[4 * ((j + leny) * width + i + lenx) + 0];
              g += data[4 * ((j + leny) * width + i + lenx) + 1];
              b += data[4 * ((j + leny) * width + i + lenx) + 2];
            }
          }

          const vr = r / total;
          const vg = g / total;
          const vb = b / total;
          for (let leny = -blur; leny <= blur; leny += 1) {
            for (let lenx = -blur; lenx <= blur; lenx += 1) {
              data[4 * ((j + leny) * width + i + lenx) + 0] = vr;
              data[4 * ((j + leny) * width + i + lenx) + 1] = vg;
              data[4 * ((j + leny) * width + i + lenx) + 2] = vb;
            }
          }
        }
      }

      ctx.putImageData(pixels, 0, 0);
    },
  },
];
