import type { Meta, StoryObj } from '@storybook/nextjs';

import Slider from './Slider';
import { sliderData } from '@/app/components/functions/data';

const meta = {
	component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
        sliderData: sliderData,
        categoryData: [{
            "image": "https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/5fc6b8b8-eca1-4a49-9739-d2ddec225243/Lakme-9to5-Powerplay-Priming-Concealer-Built-in-Primer-Hydrating-34-Almond.jpg",
            "productName": "Product Name",
            "price": "100"
        }, {
            "image": "https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/18b39fd9-e045-48a2-9350-70e946957db4/FACES-CANADA-Ultime-Pro-Makeup-Fixer-Primer-Setting-Spray.jpeg",
            "productName": "Product Name",
            "price": "100"
        }, {
            "image": "https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/eabcaa91-fb50-4a30-a26b-cd8e3cd96041/Renee-Glass-Glow-Pre-Make-Up-Oil.jpg",
            "productName": "Product Name",
            "price": "100"
        }, {
            "image": "https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/cbad9424-9c30-43e2-b83e-985a6fb16c5f/Swiss-Beauty-Real-Make-Up-Base-Highlighting-Primer-01-Natural-Tint.jpg",
            "productName": "Product Name",
            "price": "100"
        }, {
            "image": "https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/98654692-7cbf-44ff-b493-677c00928259/Dot-Key-Strawberry-Dew-In-the-Spotlight-Strobe-Cream.jpg",
            "productName": "Product Name",
            "price": "100"
        }, {
            "image": "https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/42794333-85f6-40a0-9931-8769e3fa7c5b/Swiss-Beauty-Cream-It-Up-Blusher-With-Shea-Butter-2-Natural-Flush.jpeg",
            "productName": "Product Name",
            "price": "100"
        }, {
            "image": "https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/da19831c-80fb-4406-b560-6151f64ebda7/Lakme-Makeup-Skincare-VitC-Superglow-Skin-Perfecting-Tint-Neutral-Nude-N200.jpg",
            "productName": "Product Name",
            "price": "100"
        }, {
            "image": "https://cdn.zeptonow.com/production/ik-seo/tr:w-1080,ar-1080-1080,pr-true,f-auto,q-80/cms/product_variant/df9e3857-b36b-46d5-884c-8504cc9b572f/The-Face-Shop-Rice-Water-Bright-Light-Cleansing-Oil.jpg",
            "productName": "Product Name",
            "price": "100"
        }]
    },
};
