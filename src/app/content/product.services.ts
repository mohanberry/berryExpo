export class productsServise {
    private prodList= [
        {
            id: 1,
            title: 'BHANGRA DAB\' CREWNECK',
            description: 'It\'s called Dabbin\', and it\'s a move that caught millions worldwide. Our Bhangra Dabbin Crewneck is a wonderful piece of street wear. Made on premium material. ',
            imgPath: '//cdn.shopify.com/s/files/1/2037/8455/products/Bhangra_Dabbin_Red_280x.jpg?v=1495860211',
            rating: 5,
            price: 650
        },
        {
            id: 2,
            title: 'PUNJAB BORN FREE WINDBREAKER - CAMOUFLAGE',
            description: 'Fresh, New, Powerful. This new Punjab Windbreaker in camouflage comes with the Born Free poetry in the backside and prayer hand icon in front. Great for the winter months and...',
            imgPath: 'https://cdn.shopify.com/s/files/1/2037/8455/products/PUNJAB_Camouflage_Windbreaker_jacket_-_2_280x.JPG?v=1518734091',
            rating: 4,
            price: 750
        },
        {
            id: 3,
            title: 'PANJAB STREET HOODIE (BLACK)',
            description: 'Introducing the PANJAB Urban Street Hoodie. Designed to present both a hip and bold statement of our PANJAB motherland heritage. Represent.',
            imgPath: 'https://cdn.shopify.com/s/files/1/2037/8455/products/PANJAB_Black_Pullover_Hoodie_280x.jpg?v=1495945910',
            rating: 3,
            price: 1050
        },
        {
            id: 4,
            title: 'CHARDI KALA VIBES CREWNECK (ORANGE)',
            description: 'This beautiful Punjabi Apparel comes from the spirit of Chardi Kala, an expression in Sikhi in which one lives with an unwavering spirit of joy and optimism in all their actions....',
            imgPath: 'https://cdn.shopify.com/s/files/1/2037/8455/products/ChardiKalaVibes_Orange-NEW_280x.jpg?v=1502123375',
            rating: 5,
            price: 1650
        },
        {
            id: 5,
            title: 'PUNJAB BORN FREE WINDBREAKER - BURGUNDY',
            description: 'Fresh, New, Powerful. This new Punjab Windbreaker in deep burgundy comes with the Born Free poetry in the backside and prayer hand icon in front. Great for the winter months and...',
            imgPath: 'https://cdn.shopify.com/s/files/1/2037/8455/products/PUNJAB_Burgendy_Windbreaker_-_1_280x.JPG?v=1518734179',
            rating: 5,
            price: 2650
        }
    ];

    getProduct() {
        return this.prodList;
    }
}