
// Central store for managing application state
export const store = {
    products: [
        {
            id: 1,
            name: "Fired Up Ball",
            description: "An adidas match ball used during the 24/25 UEFA Champions League.",
            details: "Bring the energy of Europe's elite club competition to your pitch. One of three adidas official match balls gracing the new-format UEFA Champions League in the 24/25 season, this Pro Third football stands out with a dynamic design and vibrant colours. Seamless and durable, its thermally bonded construction makes for dependable performances on the field.",
            price: 149.99,
            stock: 15,
            color: "White/Red/Black",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e99e9844d5894a0eb309862108f7dcae_9366/Fired_Up_Ball_White_JH1295_DM1.jpg"
        },
        {
            id: 2,
            name: "Tiro Match Ball",
            description: "Improve your skills with this adidas Tiro ball.",
            details: "This adidas Tiro Match football was built to help teams perfect their play on the training pitch. The hand-stitched panels and hard-wearing, coated surface make it durable and ideal for repeated use. The International Match Standard stamp means it's always up to scratch.",
            price: 139.99,
            stock: 25,
            color: "White/Green",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cef81110c1554416b788af3200d447c6_9366/Tiro_Match_Ball_White_HT2421_01_standard.jpg"
        },
        {
            id: 3,
            name: "Women's Euro25 LGE",
            description: "A training ball with a design inspired by the tournament's match ball.",
            details: "Take your passion for women's football onto the training pitch with this FIFA Quality certified Women's Euro25 League ball from adidas. Boasting a seamless TSBE construction, it's perfect for kickabouts and fine-tuning your skills. The striking, Switzerland-inspired design takes inspiration from the official match ball of UEFA Women's EURO25™.",
            price: 119.99,
            stock: 30,
            color: "White/Purple/Multicolor",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3f0d5db551e5440185daaafc3fb69b62_9366/Womens_Euro25_LGE_White_JH1262_01_00_standard.jpg"
        },
        {
            id: 4,
            name: "Fussballliebe Pro Ball",
            description: "The official match ball of Europe's top international tournament.",
            details: "Embrace the biggest stage of European football with a ball crafted with high-end materials that ensure perfect on-field performance. The innovative PRECISIONSHELL enhances accuracy, while the new deboss structure is engineered for precision and heightened control, delivering a unique football experience. The bold graphics draw inspiration from the colours of the 24 participating nations, evoking the genuine sense of wonder felt when playing the beautiful game.",
            price: 179.99,
            stock: 20,
            color: "White/Black/Blue",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ede55b5c12c74045a6d40168c0f63575_9366/Fussballliebe_Pro_Ball_White_IQ3682_HM1.jpg"
        },
        {
            id: 5,
            name: "Tiro League Thermally Bonded Ball",
            description: "A seamless ball for seamless football.",
            details: "Tiki-Taka, one-touch passing and perfectly weighted through balls. Get your team playing beautifully flowing football with this adidas Tiro League ball. The seamless, thermally bonded surface ensures it always stays in shape for the best touches. The FIFA International Match Standard stamp proves its quality. Now it's time to prove yours.",
            price: 234.99,
            stock: 18,
            color: "White/Blue",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/38e513c6c4b34e919c73af2e007e53d1_9366/Tiro_League_Thermally_Bonded_Ball_White_HT2429_01_standard.jpg"
        },
        {
            id: 6,
            name: "UCL Club Istanbul Ball",
            description: "A durable ball that celebrates a magical connection.",
            details: "Watch the stars align for Istanbul in 2023. The intricate design on this adidas UCL Club football takes its inspiration from the official match ball used in the UEFA Champions League knockout stages. Created for kickabouts, it combines a durable, machine-stitched construction and a long-lasting butyl bladder.",
            price: 274.99,
            stock: 22,
            color: "Gold/Black/White",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d0cf5256fca94d5ba084af5e00a516ba_9366/UCL_Club_Istanbul_Ball_Gold_HZ6925_01_standard.jpg"
        },
        {
            id: 7,
            name: "OCEAUNZ PRO FOOTBALL",
            description: "The official match ball of the FIFA Women's World Cup",
            details: "Created for flowing football. The official match ball used during the early stages of the FIFA Women's World Cup™, this adidas Oceaunz pro ball stands out with graphics that reflect the importance of Australia and New Zealand's spectacular coastlines and life-sustaining lakes and waterways. Its seamless construction makes for a predictable flight and bounce. That Quality Pro stamp is FIFA's highest rating.",
            price: 129.99,
            stock: 15,
            color: "White/Black/Blue",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7695e774bd054d6c86dfaf2d00f1a331_9366/OCEAUNZ_PRO_FOOTBALL_White_HT9011_01_standard.jpg"
        },
        {
            id: 8,
            name: "Fussballliebe Club Ball",
            description: "This tournament-inspired ball is made in part with recycled materials",
            details: "Bring football tournament fever to your next kick-about. With a design inspired by Europe's premier international competition, this adidas Club ball is the perfect way for you to join in the fun the next time you head out to the park. Its butyl bladder and machine-stitched construction ensure it will keep up with the most frenzied three-and-in games.",
            price: 219.99,
            stock: 40,
            color: "Orange/Black",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ce15b89a5e546dab8a50fefb6aa8793_9366/Fussballliebe_Club_Ball_Red_IN9375.jpg"
        },
        {
            id: 9,
            name: "MLS Pro Ball",
            description: "An official match ball with an important message",
            details: "Play for unity. Showing off a striking arrangement of U.S. roses and Canadian bunchberries, this adidas MLS Pro football champions the beautiful game's rich diversity. It's the ball you'll see on the pitch during the season and has a seamless surface that's thermally bonded for a predictable performance. The FIFA Quality Pro mark means it will never let you down.",
            price: 168.99,
            stock: 10,
            color: "White/Multicolor",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/90a496fa7d274d4c97c6ada000ebd020_9366/MLS_Pro_Ball_White_H57824_01_standard.jpg"
        },
        {
            id: 10,
            name: "Al Rihla Club Ball",
            description: "Write your own football stories with this durable ball",
            details: "Al Rihla means the Journey, the ball is just the beginning. The rest of your football journey is yet to be written. Taking design inspiration from the FIFA World Cup™ match ball, this Al Rihla Club ball is machine-stitched for rugged reliability. The butyl bladder means it will stay pumped up for longer, whether you're on the training field or at the park.",
            price: 154.99,
            stock: 28,
            color: "Green/Blue",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bc3692535744781aa16ae6800859706_9366/Al_Rihla_Club_Ball_Green_H57785_01_standard.jpg"
        },
        {
            id: 11,
            name: "UCL 23/24 Knockout Mini Ball",
            description: "Pay tribute to the final venue with a UCL ball designed for silky skills",
            details: "The pride of London. The bold design on this adidas UCL Mini ball borrows from the lion-inspired look of the official match ball. Made for showing your skills on the move, this durable ball features a TPU cover for pinpoint control and a foam core that means you never have to pump it up. You'll feel like football royalty every time you see that iconic UEFA Champions League logo.",
            price: 79.99,
            stock: 35,
            color: "White/Red/Yellow",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1104c97020c0434381fc7052dd70708e_9366/UCL_23-24_Knockout_Mini_Ball_White_IN9337.jpg"
        },
        {
            id: 12,
            name: "Fussballliebe Belgium Club Ball",
            description: "Belgium ball inspired by Europe's biggest international tournament",
            details: "Pay tribute to the Belgium national team as they hunt for silverware in Germany. Standing out from Fussballliebe ball-inspired graphics, the printed team badge on this adidas Club ball shares your football allegiances. Behind the scenes, a resilient butyl bladder ensures it always bounces back for more.",
            price: 189.99,
            stock: 20,
            color: "Red/Black/Yellow",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ede3aa38371344308106f5d8c9b36e22_9366/Fussballliebe_Belgium_Club_Ball_Red_IP2928.jpg"
        }
    ],

    cart: JSON.parse(localStorage.getItem('cart')) || [],
    PRODUCTS_PER_PAGE: 4,

    getProduct(id) {
        return this.products.find(p => p.id === id);
    },

    filterProducts(filterValue) {
        if (!filterValue) return [...this.products];

        const [type, order] = filterValue.split(':');
        return [...this.products].sort((a, b) => {
            if (order === 'asc') {
                return a[type].toString().localeCompare(b[type].toString());
            }
            return b[type] - a[type];
        });
    },

    addToCart(productId) {
        const product = this.getProduct(productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            if (existingItem.quantity >= product.stock) {
                alert('Not enough stock available');
                return;
            }
            existingItem.quantity += 1;
        } else {
            this.cart.push({ id: productId, quantity: 1 });
        }

        this.saveCart();
        this.updateCartCount();
    },

    updateCartQuantity(productId, newQuantity) {
        const product = this.getProduct(productId);
        if (!product) return;

        if (newQuantity < 1) {
            this.removeFromCart(productId);
            return;
        }

        if (newQuantity > product.stock) {
            alert('Not enough stock available');
            return;
        }

        const itemIndex = this.cart.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
            this.cart[itemIndex].quantity = newQuantity;
            this.saveCart();
            this.updateCartCount();
        }
    },

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
    },

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    },

    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = this.cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    },

    calculateTotals() {
        const subtotal = this.cart.reduce((total, item) => {
            const product = this.getProduct(item.id);
            if (!product) return total;
            return total + (product.price * item.quantity);
        }, 0);

        const shipping = subtotal > 50 ? 0 : 10;
        const total = subtotal + shipping;

        return { subtotal, shipping, total };
    },

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartCount();
    }
};