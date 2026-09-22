import React, { useContext, useEffect } from 'react'
import Carousel from '../Components/Carousel'
import Objects1 from '../Components/Objects1'
import Kitchen from '../Components/Kitchen'
import Nav2 from '../Components/Nav2'
import { useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer1 from '../Components/Footer1'
import Axios from 'axios'
import Footer2 from '../Components/Footer2'

const Home = (logout) => {
  const f = async () => {
    const result = await Axios.post(`http://localhost:8011/uploadproduct`, [{
      "img": [
        "../../public/61Io5-ojWUL._SL1500_.jpg"
      ],
      "category": "electronics",
      "title": "OnePlus Nord CE4 Lite 5G (Super Silver, 8GB RAM, 128GB Storage)",
      "rating": "4",
      "bought": "5k+",
      "discount": "-14%",
      "price": "17,999",
      "oldPrice": "20,999",
      "emi": "EMI starts at ₹873. No Cost EMI available EMI options  With Amazon Business, you would have saved ₹228.35 in the last year. Create a free account and save up to 15% today.",
      "about": "5500 mAh Battery & Reverse Charging: Ditch the power bank and press play all day with Nord CE4 Lite’s gigantic 5,500 mAh battery. You’ll even have enough juice to charge up your buddy’s phone with reverse wired charging 80W SUPERVOOC Fast Charging: Add excitement to your day with 80W SUPERVOOC fast charging, which fully replenishes the hefty battery in just 20 minutes, ensuring a day's worth of power in no time. Superior snaps by Sony: Harness the power of the 50MP Sony LYT-600 main camera, bringing the capability to capture stunning Sony-quality photos and videos directly into your palm. Boosted Battery Health: Battery Health Engine, with its smart AI and hardware combo, learns how you charge. It extends your battery life to 4 years, even with daily charges up to 80% or more. Easily track and adjust settings to get the most out of your phone. Super Bright AMOLED Display: Dive into the world of bold colors and crisp visuals with 6.67inch 120Hz AMOLED Display. No more squinting outdoors or running for shade with our super-bright display that comes with 2,100 nits peak brightness. Dual Stereo Speakers: Experience an astonishing 300% increase in volume with the OnePlus Nord CE4 Lite’s dual stereo speakers. You won’t need earplugs, but you might need to apologize to your neighbors for the party vibes! AI Smart Cutout: Use AI Smart Cutout to swiftly edit photos, choose and personalize cutout selections, and share them with a single tap. OxygenOS14: OxygenOS 14 isn’t just smarter—it’s designed to deliver sustained smoothness and security with guaranteed support for two major Android updates and three years of essential security updates.",
      "details": " Brand\tOnePlus Operating System\tOxygenOS RAM Memory Installed Size\t8 GB CPU Model\tSnapdragon CPU Speed\t2.2 GHz",
    },
    {
      "img": [
        "../../public/31sdKXg5CKL.jpg"
      ],
      "category": "electronics",
      "title": "Samsung Galaxy F55 5G (Raisin Black, 256 GB) (8 GB RAM)",
      "rating": "4",
      "bought": "100",
      "discount": "-29%",
      "price": "22,699",
      "oldPrice": "31990",
      "emi": "EMI starts at ₹1,100. No Cost EMI available EMI options  With Amazon Business, you would have saved ₹228.35 in the last year. Create a free account and save up to 15% today.",
      "about": "About this item 8 GB RAM | 256 GB ROM | Expandable Upto 1 TB 17.02 cm (6.7 inch) Full HD+ Display 50MP + 8MP + 2MP | 50MP Front Camera 5000 mAh Battery",
      "details": "Brand\tSamsung Operating System\tAndroid 14 RAM Memory Installed Size\t8 GB CPU Model\tCortex A5 CPU Speed\t2.4 GHz",
      
    },
    {
      "img": [
        "../../public/81T3olLXpUL._SL1500_.jpg"
      ],
      "category": "electronics",
      "title": "Samsung Galaxy M05 (Mint Green, 4GB RAM, 64 GB Storage) | 50MP Dual Camera | Bigger 6.7\" HD+ Display | 5000mAh Battery | 25W Fast Charging | 2 Gen OS Upgrade & 4 Year Security Update | Without Charger",
      "rating": "4",
      "bought": "5k",
      "discount": "-30%",
      "price": "6,999",
      "oldPrice": "9,999",
      "emi": "EMI starts at ₹339. No Cost EMI available EMI options  With Amazon Business, you would have saved ₹228.35 in the last year. Create a free account and save up to 15% today.",
      "about": "Captivating viewing experience on bigger 6.7\" Display with HD+ resolution (720*1600 Pixels) | 20:9 Aspect Ratio 50 MP High-resolution Dual Camera (f/1.8) for sharp and detailed pictures| 8 MP Front camera (f/2.0) for stunning selfie | FHD (1920*1080) Video resolution Get a massive 5000mAh with C-Type 25 W Fast Charging Latest Android 14 Operating System having One UI Core 6.0 platform | 2GHz, 1.8GHz Clock Speed with Octa-Core Processor | 8 GB RAM with RAM Plus | Expandable Memory upto 1 TB Get upto 2 Generations of AndroidOS Upgrades & 4 Years of Security Updates with Samsung Galaxy M05.",
      "details": "Brand\tSamsung Operating System\tAndroid 14 RAM Memory Installed Size\t4 GB CPU Model\tMediaTek Helio CPU Speed\t2 GHz",
      
    },
    {
      "img": [
        "../../public/71EN6N9kUEL._SL1500_.jpg"
      ],
      "category": "electronics",
      "title": "realme NARZO N61 (Marble Black, 4GB RAM+64GB Storage) 90Hz Eye Comfort Display | IP54 Dust & Water Resistance | 48-Month Fluency | Charger in The Box",
      "rating": "4",
      "bought": "5k",
      "discount": "-17%",
      "price": "7,498",
      "oldPrice": "8,999",
      "emi": "EMI starts at ₹364. No Cost EMI available EMI options  Coupon:       Apply ₹500 coupon Terms | Shop items With Amazon Business, you would have saved ₹228.35 in the last year. Create a free account and save up to 15% today.",
      "about": "Captivating viewing experience on bigger 6.7\" Display with HD+ resolution (720*1600 Pixels) | 20:9 Aspect Ratio 50 MP High-resolution Dual Camera (f/1.8) for sharp and detailed pictures| 8 MP Front camera (f/2.0) for stunning selfie | FHD (1920*1080) Video resolution Get a massive 5000mAh with C-Type 25 W Fast Charging Latest Android 14 Operating System having One UI Core 6.0 platform | 2GHz, 1.8GHz Clock Speed with Octa-Core Processor | 8 GB RAM with RAM Plus | Expandable Memory upto 1 TB Get upto 2 Generations of AndroidOS Upgrades & 4 Years of Security Updates with Samsung Galaxy M05.",
      "details": "Brand\trealme Operating System\tAndroid 14 RAM Memory Installed Size\t4 GB CPU Model\tMediaTek Helio CPU Speed\t1.8 GHz",
      
    },
    {
      "img": [
        "../../public/51S9xvQhseL._SL1500_.jpg",
        "../../public/51UMZ3E-yxL._SL1500_.jpg",
        "../../public/71ENtrOR8NL._SL1500_.jpg",
        "../../public/81nMsYgIHdL._SL1500_.jpg",
        "../../public/81TdEvvtc7L._SL1500_.jpg",
        "../../public/81U48oO05LL._SL1500_.jpg"
      ],
      "category": "electronics",
      "title": "Redmi 13C 5G (Starlight Black, 4GB RAM, 128GB Storage) | MediaTek Dimensity 6100+ 5G | 90Hz Display",
      "rating": "3.9",
      "bought": "5k",
      "discount": "-35%",
      "price": "9,099",
      "oldPrice": "13,999",
      "emi": "EMI starts at ₹441. No Cost EMI available EMI options  With Amazon Business, you would have saved ₹228.35 in the last year. Create a free account and save up to 15% today.",
      "about": "About this item Processor: Powerful MediaTek Dimensity 6100+ 5G SoC | 8GB of RAM including 4GB virtual | 6.74\" HD+ 90Hz display with Corning Gorilla Glass 3 Protection | 50MP AI Dual camera |Fast Side fingerprint | 5000mAh Battery 6.74\" HD+ 90Hz display with Corning Gorilla Glass 3 Protection, 600nits in High Brightness mode 50MP AI Dual camera with Primary sensor of f/1.8 (4-in-1 super pixel) with the following modes: Photo | Portrait | Night | Video | 50MP mode | Time-lapse | Classic film filters | Frame | HDR | Google lens | Voice Shutter |",
      "details": "Brand\tRedmi Operating System\tMIUI 14, Android 13.0 RAM Memory Installed Size\t4 GB CPU Model\tSnapdragon CPU Speed\t2 GHz",
      
    },
    {
      "img": [
        "../../public/71PNpGSF9mL._SL1500_.jpg",
        "../../public/81ccWRdu9uL._SL1500_.jpg",
        "../../public/81ncbaMp+lL._SL1500_.jpg",
        "../../public/81XmCGfKlWL._SL1500_.jpg"
      ],
      "category": "electronics",
      "title": "Redmi A4 5G (Sparkle Purple, 4GB RAM, 128GB Storage) | Global Debut SD 4s Gen 2 | Segment Largest 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging",
      "rating": "4.5",
      "bought": "5k",
      "discount": "-23%",
      "price": "9,299",
      "oldPrice": "11,999",
      "emi": "EMI starts at ₹451. No Cost EMI available EMI options  With Amazon Business, you would have saved ₹228.35 in the last year. Create a free account and save up to 15% today.",
      "about": "High performance - Snapdragon 4s Gen 2 5G Processor | Large 17.47cm 120Hz Display | Upto 8GB RAM including 4GB Virtual RAM |128GB Storage | Fast Side fingerprint sensor Display: Large 17.47 cm 120Hz Refresh Rate display | 600nits peak brightness | 240Hz Touch sampling Rate | TUV triple certified eye care protection Camera: 50MP Dual camera | 5MP Front camera 5160mAh(typ) battery with 18W fast charging support and 33W charger in-box with USB Type-C Expandable Storage to upto 1TB with Dedicated MicroSD card Slot | 3.5mm headphone jack | Android 14 | Side fingerprint sensor Supports 4G+ 5G SA network | Note : 5G NSA not supported | Please check availability of Standalone 5G with your networks provider",
      "details": "Brand\tRedmi Operating System\tAndroid 14 RAM Memory Installed Size\t4 GB Memory Storage Capacity\t128 GB Screen Size\t6.88 Inches",
      
    },
    {
      "img": [
        "../../public/51TOrXHNuIL._SL1200_.jpg",
        "../../public/61p1GDl3JPL._SL1200_.jpg",
        "../../public/714J-HAZAyL._SL1200_.jpg"
      ],
      "category": "electronics",
      "title": "Lava O3 (Glossy Black, 4 GB RAM, 64 GB Storage) | Biggest 6.75\" HD+ Display | 13MP AI Dual Rear Camera | 5000 mAh Battery | Secure Face Unlock | Fingerprint Reader | Charger & Phone-Cover in Box",
      "rating": "3.8",
      "bought": "1k",
      "discount": "-14%",
      "price": "6,199",
      "oldPrice": "7,199",
      "emi": "EMI starts at ₹301. No Cost EMI available EMI options  With Amazon Business, you would have saved ₹228.35 in the last year. Create a free account and save up to 15% today.",
      "about": "4 GB RAM, 64 GB Storage, Up to 8 GB Expandable RAM: Enjoy smooth multitasking, ample storage for apps and files, and the option to expand RAM for improved performance and efficiency. 13 MP AI Rear Camera & 5 MP Selfie Camera: Capture stunning, high-quality photos with AI-enhanced clarity and detail, perfect for both landscapes and selfies. 10W Charging via Type-C & 5000mAh Battery: Experience fast, efficient power replenishment with 10W charging and a large 5000mAh battery for extended usage throughout the day. Enhanced Security with Fingerprint Reader, Secure Face Unlock & Anonymous Call Recording: Protect your device with fast fingerprint and face recognition unlock options, plus enjoy added privacy with anonymous call recording for secure conversations. 6.75\" HD+ Punch Hole Display (1600 x 720 Resolution) & 60Hz Refresh Rate: Enjoy vibrant visuals and smooth viewing on a large 6.75\" display with a sharp 1600 x 720 resolution and a 60Hz refresh rate for enhanced clarity and fluid performance.",
      "details": "Brand\tLava Operating System\tAndroid 14 RAM Memory Installed Size\t4 GB CPU Model\tSnapdragon Memory Storage Capacity\t64 GB",
      
    },
    {
      "img": [
        "../../public/51KJE22BKrL._SL1000_.jpg",
        "../../public/51Ot-iGKWqL._SL1500_.jpg",
        "../../public/71QGsBvLd7L._SL1500_.jpg",
        "../../public/414tUPT5HcL._SL1500_.jpg"
      ],
      "category": "electronics",
      "title": "OnePlus Nord CE4 Lite 5G (Ultra Orange, 8GB RAM, 128GB Storage)",
      "rating": "4.1",
      "bought": "1k",
      "discount": "-14%",
      "price": "17,999",
      "oldPrice": "20,999",
      "emi": "EMI starts at ₹873. No Cost EMI available EMI options  With Amazon Business, you would have saved ₹228.35 in the last year. Create a free account and save up to 15% today.",
      "about": "5500 mAh Battery & Reverse Charging: Ditch the power bank and press play all day with Nord CE4 Lite’s gigantic 5,500 mAh battery. You’ll even have enough juice to charge up your buddy’s phone with reverse wired charging 80W SUPERVOOC Fast Charging: Add excitement to your day with 80W SUPERVOOC fast charging, which fully replenishes the hefty battery in just 20 minutes, ensuring a day's worth of power in no time. Superior snaps by Sony: Harness the power of the 50MP Sony LYT-600 main camera, bringing the capability to capture stunning Sony-quality photos and videos directly into your palm. Boosted Battery Health: Battery Health Engine, with its smart AI and hardware combo, learns how you charge. It extends your battery life to 4 years, even with daily charges up to 80% or more. Easily track and adjust settings to get the most out of your phone. Super Bright AMOLED Display: Dive into the world of bold colors and crisp visuals with 6.67inch 120Hz AMOLED Display. No more squinting outdoors or running for shade with our super-bright display that comes with 2,100 nits peak brightness. Dual Stereo Speakers: Experience an astonishing 300% increase in volume with the OnePlus Nord CE4 Lite’s dual stereo speakers. You won’t need earplugs, but you might need to apologize to your neighbors for the party vibes! AI Smart Cutout: Use AI Smart Cutout to swiftly edit photos, choose and personalize cutout selections, and share them with a single tap. OxygenOS14: OxygenOS 14 isn’t just smarter—it’s designed to deliver sustained smoothness and security with guaranteed support for two major Android updates and three years of essential security updates.",
      "details": "Brand\tOnePlus Operating System\tOxygenOS RAM Memory Installed Size\t8 GB CPU Model\tSnapdragon CPU Speed\t2.2 GHz",
      
    },
    {
      "img": [
        "../../public/51o8T3dM7bL._SL1500_.jpg",
        "../../public/61J6s1tkwpL._SL1500_.jpg",
        "../../public/61QRgOgBx0L._SL1500_.jpg",
        "../../public/71EA48-X7zL._SL1500_.jpg"
      ],
      "category": "electronics",
      "title": "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
      "rating": "4.2",
      "bought": "1k",
      "discount": "-22%",
      "price": "15,678",
      "oldPrice": "19,999",
      "emi": "EMI starts at ₹760. No Cost EMI available EMI options  With Amazon Business, you would have saved ₹228.35 in the last year. Create a free account and save up to 15% today.",
      "about": "Camera: 108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Rear Camera Mode: Hi-res 108MP mode, 3x Lossles Zoom, Photo, Video, Nightscape, Expert, Panoramic, Portrait, Macro, Time-lapse, Slow-motion, Long exposure, Dual-view video, Text Scanner, 1080p/720p@30fps, Video zoom: 1080P@30fps, 720P@30fps, Slow motion: 720P@120fps, Time-Lapse: 1080P@30fps, Steady Video EIS support Display: 6.72 Inches; 120 Hz Adaptive refresh rate; FHD+(1080×2400), Colors: 16.7 Million colors, 391 ppi, Aspect Ratio: 20:9, Brightness: 550 nits (typical), 680 nits (HBM) Operating System: Oxygen OS based on Android 13.1 Processor: Qualcomm Snapdragon 695 5G Battery & Charging: 5000 mAh with 67W SUPERVOOC Endurance Edition",
      "details": " Brand\tOnePlus Operating System\tOxygenOS RAM Memory Installed Size\t8 GB CPU Model\tSnapdragon CPU Speed\t2.2 GHz",
      
    },
    {
      "img": [
        "../../public/71biQP-kH1L._SY695_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "Bacca Bucci Mens Ironman Everyday Walking Shoes With High Abrasion Rubber Outsole With Molded Eva Sockliner",
      "rating": "3.7",
      "bought": "100",
      "discount": "-59%",
      "price": "1,424",
      "oldPrice": "3,499",
      "emi": "EMI starts at ₹129 per month. EMI options ",
      "about": "High-abrasion rubber Out Sole : High-abrasion rubber Out Sole provides long-lasting durability and adequate grip and Bouce with every Step. Molded EVA sockliner : Double density EVA Sockliner Provides comfort on every step, it reduces your foot fatigue. Compression-molded foam midsole : Compression-Moulded foam midsole with a lower heel-to-toe drop provides lightweight and propulsive power. Stretchy, recycled content mesh : Open-engineered Stretchy mesh offers enhanced breathability and comfort. Your Everyday Shoe : you can use these Bacca Bucci Sports Shoes for your everyday Run,walk or just pair up with any outfit, it gives both style and comfort.",
      "details": "Material typeEthylene Vinyl Acetate, Rubber Closure typeLace-Up Heel typeFlat Water resistance levelNot Water Resistant Sole materialPhylon Rubber EVA MIX StyleMen Running Shoes Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/71f3BmjCwtL._SY695_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "BRUTON EVA Lite Sport Shoes Running Shoes for Men- Blue",
      "rating": "3.6",
      "bought": "500",
      "discount": "-83%",
      "price": "499",
      "oldPrice": "2,999",
      "emi": "EMI starts at ₹173 per month. EMI options ",
      "about": "Versatile Design: Suitable for men, boys, gym workouts, jogging, walking, running, and daily use. Premium Quality Materials: Crafted with high-quality Synthetic Leather and EVA Sole materials to ensure durability and comfort. Stylish and Trendy: Features the latest designs to keep you looking trendy and fashionable while you exercise. Easy to Clean: Washable design makes maintenance a breeze, ensuring your shoes stay fresh for longer. Comfortable Fit: Designed for optimal comfort during extended wear, reducing fatigue and discomfor",
      "details": "Material typeEthylene Vinyl Acetate Closure typeLace-Up Heel typeNo Heel Water resistance levelNot Water Resistant Sole materialEthylene Vinyl Acetate StyleSneaker Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/61RFlIUeaIL._SY695_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "Lancer Men's Sports Running Shoes Indus-251",
      "rating": "3.6",
      "bought": "500",
      "discount": "-56%",
      "price": "554",
      "oldPrice": "1,249",
      "emi": "EMI starts at ₹192 per month. EMI options  With Amazon Business, you would have saved ₹228.35 in the last year. Create a free account and save up to 10% today.",
      "about": "Sole: Ethylene Vinyl Acetate Closure: Pull On Fit Type: Regular Shoe Width: Medium Outer Material: Textile Closure Type: Lace-Up",
      "details": "Product details Material typeMesh Closure typePull-On Heel typeFlat Water resistance levelNot Water Resistant Sole materialEthylene Vinyl Acetate StyleRunning Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/71+Qvi-u6dL._SY695_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "Puma Men's Velocity Nitro 2 Running Shoe",
      "rating": "4.1",
      "bought": "500",
      "discount": "-30%",
      "price": "8,399",
      "oldPrice": "11,999",
      "emi": "EMI starts at ₹407. No Cost EMI available EMI options  With Amazon Business, you would have saved ₹228.35 in the last year. Create a free account and save up to 15% today.",
      "about": "Style Name:-Running Shoe Model Name:-Velocity Nitro 2 Brand Color:-Fire Orchid-Black Material:-Textile Care Instructions:-Wipe with a clean dry cloth",
      "details": "Material typeRubber, Thermoplastic Polyurethane Closure typeLace-Up Heel typeFlat Water resistance levelNot Water Resistant Sole materialRubber StyleRunning Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/81Qi5P+GYbL._SY695_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "ASIAN Men's Thar-01 Sports Running,Walking & Gym Shoes with Eva Sole Extra Jump Casual Sneaker Shoes for Men's & Boy's",
      "rating": "3.8",
      "bought": "100",
      "discount": "-45%",
      "price": "693",
      "oldPrice": "1,249",
      "emi": "EMI starts at ₹240 per month. ",
      "about": "Lightweight & Breathable : Exclusive design and durable materials every step feels light and breezy. Breathable, free-moving fabrics which adjust according to your foot and creates an astoundingly easy-going experience. Non Slip & Shockproof : Great engineering strikes a balance in style, made in the potent design and latest fashion trends. Made for long-term wear, with extra emphasis on providing cushion to the feet, removing heel strain. Comfort Sole & Flexible Walk : The outsoles are made by an air cushion, doubling the effect of shock absorption. Besides, these shoes perform excellent in durability and are also slip resistant. It provides push cushioning comfort for foot pain relief and helps relieve pressure while conforming to your every step",
      "details": "Material typeMesh Closure typeLace-Up Heel typeFlat Water resistance levelNot Water Resistant Sole materialEthylene Vinyl Acetate StyleFirst Walker Shoe Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/61irMxQottL._SY695_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "Campus Men's Og-D1 Sneaker",
      "rating": "3.9",
      "bought": "100",
      "discount": "-61%",
      "price": "549",
      "oldPrice": "1,399",
      "emi": "EMI starts at ₹190 per month. EMI options  With Amazon Business, you would have saved ₹228.35 in the last year. Create a free account and save up to 10% today.",
      "about": "Lifestyle: Sneakers Closure: Lace-Up Warranty Type: Manufacturer",
      "details": "Product details Material typeMesh Closure typeLace-Up Heel typeFlat Water resistance levelNot Water Resistant Sole materialPolyvinyl Chloride StyleSneaker Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/71xkI-PIE5L._SL1500_.jpg"
      ],
      "category": "grocery & gourmet foods",
      "title": "Fresh Cucumber, 500g",
      "rating": "4.1",
      "bought": "90k",
      "discount": "6",
      "price": "28",
      "oldPrice": "34",
      "emi": "",
      "about": "Sold by More Kharar DS and Fulfilled by Amazon. This is a Vegetarian product. Cucumbers are 95 percent water Good source of Vitamin B6, C, K, Thiamin and Folate Can be eaten raw or used in salads, soups and juices Store in a cool, dry place away from sunlight number_of_pieces:2 ingredients:Fresh cucumber",
      "details": "",
      
    },
    {
      "img": [
        "../../public/81dnQAFzn-L._SL1500_.jpg"
      ],
      "category": "grocery & gourmet foods",
      "title": "Fresh Chilli - Green, 100g",
      "rating": "4.2",
      "bought": "70k",
      "discount": "3",
      "price": "5",
      "oldPrice": "8",
      "emi": "",
      "about": "In Stock Sold by More Kharar DS and Fulfilled by Amazon. This is a Vegetarian product. Good source of Vitamin B6, C, Iron and Potassium. Used in curries, soups, and other dishes and can be used to make pickle Store in a cool, dry place away from sunlight material_features:vegetarian",
      "details": "",
      
    },
    {
      "img": [
        "../../public/51BSNgiBDqL._SL1500_.jpg"
      ],
      "category": "grocery & gourmet foods",
      "title": "Fresh Garlic (lehsun) 100g Pack",
      "rating": "4.1",
      "bought": "40k",
      "discount": "17",
      "price": "58",
      "oldPrice": "75",
      "emi": "",
      "about": "In Stock Sold by More Kharar DS and Fulfilled by Amazon. This is a Vegetarian product. Rich in vitamins B1, B6, and C Good source of manganese, copper, calcium, selenium, and phosphorus Material Features: Vegetarian",
      "details": "",
      
    },
    {
      "img": [
        "../../public/71XMKwfQCzL._SL1500_.jpg"
      ],
      "category": "grocery & gourmet foods",
      "title": "Fresh Mushroom, 200g",
      "rating": "4.1",
      "bought": "40k",
      "discount": "18",
      "price": "35",
      "oldPrice": "53",
      "emi": "",
      "about": "In Stock Sold by More Kharar DS and Fulfilled by Amazon. This is a Vegetarian product. They are low in calories Good source of Riboflavin and Potassium Can be used in curries, soups, pizzas and pastas Store in refrigerator at a temperature of 0-5 degree celsius ingredients:fresh mushrooms item_form:whole material_features:vegetarian",
      "details": "",
      
    },
    {
      "img": [
        "../../public/71xBN6MxBJL._SL1469_.jpg"
      ],
      "category": "grocery & gourmet foods",
      "title": "Fresh Beans French, 250g",
      "rating": "4.1",
      "bought": "30k",
      "discount": "9",
      "price": "18",
      "oldPrice": "27",
      "emi": "",
      "about": "In Stock Sold by More Kharar DS and Fulfilled by Amazon. This is a Vegetarian product. Populary used with potatoes and onions in making curries Good source of protein, thiamin, riboflavin, niacin, calcium, iron, magnesium, phosphorus, potassium, copper, and dietary fiber Rich in vitamins A, B6, C, and K Store in cool and dry place, away from direct sunlight. item_form:whole material_features:vegetarian ingredients:fresh french beans number_of_pieces:1",
      "details": "",
      
    },
    {
      "img": [
        "../../public/41+rrPHH4fL._SL1200_.jpg"
      ],
      "category": "grocery & gourmet foods",
      "title": "Fresh Mixed Capsicum, 2Pcs - 2 Count",
      "rating": "4.3",
      "bought": "1k",
      "discount": "66",
      "price": "132",
      "oldPrice": "198",
      "emi": "",
      "about": "In Stock Sold by More Kharar DS and Fulfilled by Amazon. This is a Vegetarian product. Fresh, hygienic and natural Good source of Vitamin A,C,E, Folate and Dietary Fiber material_features:vegetarian",
      "details": "",
      
    },
    {
      "img": [
        "../../public/51DJ-9xkuQL._SL1000_.jpg"
      ],
      "category": "grocery & gourmet foods",
      "title": "Fresh Onion, 1kg",
      "rating": "4.2",
      "bought": "1l",
      "discount": "16",
      "price": "79",
      "oldPrice": "95",
      "emi": "",
      "about": "In Stock Sold by More Kharar DS and Fulfilled by Amazon. Pattern Name: Onion This is a Vegetarian product. Rich in antioxidants Good source of manganese, copper, Vitamin B6, Vitamin C and Dietary Fibers Can be used in curries, snacks and salads Store at room temperature, away from direct sunlight material_features:vegetarian item_form:whole ingredients:fresh onions",
      "details": "",
      
    },
    {
      "img": [
        "../../public/41QKCkQ2A5L._SL1000_.jpg"
      ],
      "category": "grocery & gourmet foods",
      "title": "Fresh Potato, 1kg",
      "rating": "4.2",
      "bought": "1l",
      "discount": "18%",
      "price": "40",
      "oldPrice": "49",
      "emi": "",
      "about": "In Stock Sold by More Kharar DS and Fulfilled by Amazon. This is a Vegetarian product. High source of fibre Good source of Vitamin B6, C, Potassium, and Magnesium Can be used in multiple dishes and snacks Store at room temperature, away from direct sunlight ingredients:Fresh potatoes material_features:vegetarian",
      "details": "",
      
    },
    {
      "img": [
        "../../public/41av+vz+ppL._SL1000_.jpg"
      ],
      "category": "grocery & gourmet foods",
      "title": "Fresh Tomato Hybrid, 1kg",
      "rating": "4.2",
      "bought": "70k",
      "discount": "34%",
      "price": "71",
      "oldPrice": "107",
      "emi": "",
      "about": "In Stock Sold by More Kharar DS and Fulfilled by Amazon. This is a Vegetarian product. High source of fibre Good source of Vitamin B6, C, Potassium, and Magnesium Can be used in multiple dishes and snacks Store at room temperature, away from direct sunlight ingredients:Fresh potatoes material_features:vegetarian",
      "details": "In Stock Sold by More Kharar DS and Fulfilled by Amazon. This is a Vegetarian product. Good source of Vitamin A, C, K, Iron, Folate and Potassium Help to reduce Cholesterol Can be used salads, soups and curries Store in a cool, dry place away from sunlight ingredients:fresh hybrid tomatoes",
      
    },
    {
      "img": [
        "../../public/814UxzDzhwL._SL1500_.jpg"
      ],
      "category": "collectibles",
      "title": "eCraftIndia Wooden Snowflake Merry Christmas Hanging Ornaments Props(Red White)| Christmas Wall Hangings| Christmas Decoration Items for Home Office Decor| Christmas Gifts for Women Men Family Friends",
      "rating": "3.8",
      "bought": "",
      "discount": "-50%",
      "price": "499",
      "oldPrice": "999",
      "emi": "EMI starts at ₹173 per month. EMI options ",
      "about": "About this item Size - 33Cm x 1Cm x 62Cm / 12.99\" x 0.39\" x 24.40\" Material - Wooden, Colour - Red White Package Content - 1 Snowflake Merry Christmas Hanging Ornaments Add a touch of winter wonder to your Christmas decorations with this charming wooden snowflake hanging Christmas ornaments. Perfect for enhancing your Christmas tree or as wall hangings, these decorative props create a festive ambiance in any home, living room, or office decor This delightful ornament set makes a thoughtful gift for family and friends, ideal for Christmas gift boxes or Christmas gift hampers. Spread holiday cheer and elevate their Christmas decorations with these elegant snowflakes, bringing joy and warmth to their festive celebrations Care Instructions - Use a soft cloth to gently wipe off any dust or dirt",
      "details": "Colour\tWhite & Red Christmas Hanging Brand\teCraftIndia Material\tWood Included Components\tSnowflake Merry Christmas Hanging Ornaments Item dimensions L x W x H\t10 x 10 x 620 Millimeters Net Quantity\t1.0 count Batteries Required?\tNo Item Weight\t300 Grams Manufacturer\tEunoia Crafts India Private Limited, Eunoia Crafts India Private Limited,Warehouse No.1, Jaat colony, khasra no 1660 ,Bhakrota ,Jaipur, RJ, IN, 302026Eunoia Crafts India Private Limited, Eunoia Crafts India Private Limited,Warehouse No.1, Jaat colony, khasra no 1660 ,Bhakrota ,Jaipur, RJ, IN, 302026",
      
    },
    {
      "img": [
        "../../public/81Tfy967TKL._SL1500_.jpg"
      ],
      "category": "electronics",
      "title": "LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)",
      "rating": "4.2",
      "bought": "2k",
      "discount": "-39%",
      "price": "13,490",
      "oldPrice": "21,990",
      "emi": "EMI starts at ₹654. No Cost EMI available ",
      "about": "Resolution: HD Ready (1366x768) | Refresh Rate: 50 hertz Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices Sound output: 10 Watts Output I 2 Speakers | DTS Virtual:X | Sound Type : Down Firing Smart TV Features: Web OS Smart TV | Wi-Fi | Home Dashboard | Screen Mirroring | Mini TV Browser | Multi-Tasking | Office 365, Set WXHXD (with Stand ) mm - 739 x 472 x 168 Display: Active HDR | Display Type: Flat | BackLight Module: Slim LED Warranty Information: 1-Year LG India Standard Warranty on Product from the date of purchase (T&C Apply)",
      "details": "Eligible for Free Open Box Inspection Details  Screen Size\t32 Inches Brand\tLG Display Technology\tLED Resolution\t720p Refresh Rate\t60 Hz Special Feature\tFlat Included Components\t1 LED TV, 1 Table Top Stand, 1 User Manual, 1 Warranty Card, 1 Remote Control, 2 AAA Batteries Connectivity Technology\tWi-Fi Aspect Ratio\t16:9 Product Dimensions\t3.3D x 20.1W x 17.4H Centimeters",
      
    },
    {
      "img": [
        "../../public/51EZx2f589L._SL1000_.jpg"
      ],
      "category": "computer & accessories",
      "title": "HP 15 Intel Core i5 13th Gen (16GB Ram/512GB SSD/Fhd/Windows 11/Ms Office/Backlit Kb/15.6\" (39.6Cm)/Silver/1.59Kg) Fd0316Tu Laptop",
      "rating": "3.9",
      "bought": "200",
      "discount": "-25%",
      "price": "53,990",
      "oldPrice": "71,773",
      "emi": "EMI starts at ₹2,618. No Cost EMI available",
      "about": "【Micro-edge display】Delight in intricate details on the 15.6-inch, FHD, anti-glare, and micro-edge display. Along with 250 nits, it offers stunning clarity, enhancing your viewing experience. 【Intel Core i5-1334U】Elevate your display experience with Intel Iris Xᶱ Graphics. Whether for work or entertainment, enjoy captivating visuals that redefine your computing journey. 【Upgraded memory and storage】Enjoy swift multitasking with 16GB DDR4, ensuring efficient application handling. The 512GB PCIe NVMe M.2 SSD provides ample storage for a seamless work experience. 【Intel Iris Xᶱ Graphics】micro-edge; Full-size, backlit, soft grey keyboard with numeric keypad, HP Imagepad ; Realtek Wi-Fi 6 (1x1) and Bluetooth 5.3 wireless card; 1 USB Type-C 5Gbps signaling rate (supports data transfer only and does not support charging or external monitors); 2 USB Type-A 5Gbps signaling rate; 1 AC smart pin; 1 HDMI 1.4b; 1 headphone/microphone combo 【Long battery life】Power up to 50% in just 45 mins with HP Fast Charge. The 3-cell, 41Wh battery sustains productivity, reducing the need for frequent charging.",
      "details": " Brand\tHP Model Name\tHP Laptop Screen Size\t15.6 Inches Colour\tSilver i5 13th Gen - 16GB+512GB Hard Disk Size\t512 GB CPU Model\tIntel Core i5 RAM Memory Installed Size\t16 GB Operating System\tWindows 11 Home Special Feature\tAnti Glare Screen Graphics Card Description\tIntegrated",
      
    },
    {
      "img": [
        "../../public/71RFdy6y6LL._SL1500_.jpg"
      ],
      "category": "computer & accessories",
      "title": "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Ear Buds w/ 45H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
      "rating": "3.8",
      "bought": "5k",
      "discount": "-82%",
      "price": "799",
      "oldPrice": "4,490",
      "emi": "EMI starts at ₹277 per month. ",
      "about": "Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds. Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience. These tws earbuds are your companion for a perfect gaming experience. Clear Voice Calls- It dons built-in mic on each earbud along with our ENx Environmental Noise Cancellation tech that ensures a smooth delivery of your voice via voice calls boAt Signature Sound- Delve into your cherished boAt Immersive auditory time with Airdopes 141 ASAP Charge- The tws earbuds are equipped with our ASAP Charge feature that offers up to 75 min of playtime in just 5 min of charge; while the carry case comes along with the Type C interface Instant Connect- Connect to your morning playlists without any hiccup via the Insta Wake N’ Pair technology that powers on the earbuds as soon as you open the case cover IP Rating- The tws earbuds body comes protected with IPX4 rating for water and sweat resistance Voice Assistant- You can summon your default voice assistant(s) with ease via its One Touch Voice Assistant Country Of Origin: China or India",
      "details": "Brand\tboAt Colour\tBlack Ear Placement\tIn Ear Form Factor\tIn Ear Noise Control\tNone",
      
    },
    {
      "img": [
        "../../public/61cv01SkltL._SL1500_.jpg",
        "../../public/71THgNeVGgL._SL1500_.jpg",
        "../../public/717Zx4touCL._SL1500_.jpg",
        "../../public/731ENtrOR8NL._SL1500_.jpg"
      ],
      "category": "collectibles",
      "title": "Safari Pentagon 3 Pc Set 55, 65 & 75 Cms- Small, Medium & Large Polypropylene (Pp) Hard Sided 4 Wheels 360 Degree Rotation Luggage Set/Speed_Wheel Suitcase Set/Trolley Bag Set (Cyan Blue)",
      "rating": "4.2",
      "bought": "2k",
      "discount": "-78%",
      "price": "6,699",
      "oldPrice": "30,335",
      "emi": "EMI starts at ₹325. No Cost EMI available ",
      "about": "PREMIUM QUALITY: Pentagon is a scratch and impact resistant, light weight yet durable suitcase made of polypropylene. This water resistant high quality trendy hard case trolley bag makes travelling comfortable DIMENSIONS : Our stylish yet spacious two compartment textured luggage comes in dimensions - S-55cms x 38cms x 23cms , M-66cms x 47 cms x 28cms and L-75cms x 54cms x 31cms . It has a capacity of S-48L, M-87L & L-123L .Provided with spacious divider compartment to hold all necessary things while travelling. FEATURES & STYLE: Our 4 Wheel 3 size set of Trolley bags come with a Number Lock. We provide you a smooth adjustable handle for easy movement of the Trolley. Style: Show off with our trendy yet comfortable travel suitcase with 360 degree easy manoeuvrable wheels. Explore the world with our multifunctional suitcase 3 YEAR WARRANTY: All our bags are MADE IN INDIA and come with a 3-year International Warranty against manufacturing defects",
      "details": "Brand\tboAt Colour\tBlack Ear Placement\tIn Ear Form Factor\tIn Ear Noise Control\tNone",
      
    },
    {
      "img": [
        "../../public/61HadFCvfDL._SL1500_.jpg",
        "../../public/61irMxQottL._SY695_.jpg",
        "../../public/61Y8u2y5XOL._SL1500_.jpg",
        "../../public/71qFlOgvhDL._SL1500_.jpg",
        "../../public/615JuORY9FL._SL1500_.jpg",
        "../../public/710Zk3HQh6L._SL1500_.jpg"
      ],
      "category": "collectibles",
      "title": "Fire-Boltt Phoenix Pro 35.3mm (1.39 inch) Bluetooth Calling Smart Watch, AI Voice Assistant, Metal Body with 120+ Sports Modes, SpO2, Heart Rate Monitoring (Black)",
      "rating": "4.0",
      "bought": "1k",
      "discount": "-90%",
      "price": "1,199",
      "oldPrice": "11,999",
      "emi": "EMI starts at ₹109 per month. ",
      "about": "【35.3mm (1.39 inch) Bigger Round Display】- Comes with a 35.3mm (1.39 inch) TFT Color Full Touch Screen and a 240*240 Pixel High Resolution this watch is covered to flaunt the sleek looks with a 280 NITS peak brightness This men and women fashion smartwatch will work on a single charge for about 7 days (without Bluetooth calling) and about 4 Days with Bluetooth calling. Charging Specs - The watch needs to be charged for 3 hours to reach 100%. The charger should be a 3.7V to 5V adapter or any laptop output. For a bare minimum of 20% charge the watch needs to be charged for about 30-40 mins You cannot store Music in the watch, you can only control the music. 【120+ Sports Modes】- Track each activity effectively with this smartwatch & activity tracker. Track your calories, steps and much more while you are on your fitness journey. This fitness tracker has it all There is no volume control, however when connected to bt calling you can control the volume of the call. 【Metal Body】- Fire-Boltt Phoenix Pro possess a metal body that is durable and long lasting, The watch gives a sleek look and gloss finish with shiny and is anti-corrosive",
      "details": "Operating System\tandroid & iOS Memory Storage Capacity\t128 MB Special Feature\tHeart Rate Monitor,MultiSport Tracker,Touch Screen,Notifications,Sleep Monitor,Oxymeter (SpO2),Activity TrackerHeart Rate Monitor,MultiSport Tracker,Touch Screen,Notifications,Sleep Monitor,Oxymeter (SpO2),Activity Tracker Battery Capacity\t280 Connectivity Technology\tBluetooth",
      
    },
    {
      "img": [
        "../../public/616zWrvE6BL._SL1080_.jpg",
        "../../public/7152-mn8mKL._SL1500_.jpg"
      ],
      "category": "appliances",
      "title": "nutripro Copper Juicer Mixer Grinder - Smoothie Maker - 500 Watts (3 Jars, Silver) - 2 Year Warranty",
      "rating": "4.2",
      "bought": "7k",
      "discount": "-64%",
      "price": "1,799",
      "oldPrice": "5,000",
      "emi": "EMI starts at ₹88. No Cost EMI available",
      "about": "Make Smoothies and Juices within seconds. Also suitable for dry grinding, chutneys and dips Powerful 500 W copper motor can grind almost any food. Best in the segment customer support and quality Includes easy to make and carry sipper jar",
      "details": " Brand\tnutripro Colour\tSilver Special Feature\tfood blender Capacity\t0.3 litres Product Dimensions\t30.3D x 13.3W x 22.4H Centimeters Included Components\tMixers Style\tcountertop_blender Recommended Uses For Product\tJuices, Grinding Power Source\tCorded Electric Number of Speeds\t2",
      
    },
    {
      "img": [
        "../../public/61Ohbn0vh1L._SY695_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "adidas Men's Urbanscape M Flip-Flop",
      "rating": "3.8",
      "bought": "7k",
      "discount": "-44",
      "price": "1,284",
      "oldPrice": "2,299",
      "emi": "EMI starts at ₹117 per month. ",
      "about": "Upper Material -Synthetic Fastening-Slip on Additional Information ManufacturerAdidas India Marketing Private Ltd., Adidas India Marketing Private Ltd. Office no.6, 2nd Floor, Sector-B, Pocket-7, Plot no-11, Vasant Kunj, New Delhi-110070 PackerAdidas India Marketing Private Ltd. Office no.6, 2nd Floor, Sector-B, Pocket-7, Plot no-11, Vasant Kunj, New Delhi-110070 Importeradidas India Marketing Pvt. Ltd Item Weight770 g Item Dimensions LxWxH32 x 27 x 9 Centimeters Net Quantity1 count Generic NameSlipper",
      "details": "Material typeEVA Closure typeSlip On Heel typeFlat Water resistance levelNot Water Resistant StyleURBANSCAPE M Strap typeThong Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/61BQ4JS9IHL._SY741_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "Bewakoof Men's Solid Regular Fit T-Shirt",
      "rating": "3.9",
      "bought": "50",
      "discount": "-61%",
      "price": "463",
      "oldPrice": "1,199",
      "emi": "EMI starts at ₹161 per month.",
      "about": "Fit Description : Regular Fit - Fitted at Chest and Straight on Waist Down Fabric Description : Single Jersey - Classic, lightweight jersey fabric comprising 100% cotton. Print Type: Solid Neck : Round Neck Style Tip : Pair it with your favourite pair of distressed denim sneakers from our collection for a cool, casual look, or throw on a denim jacket and dress shoes for a more formal occasion. Additional Information ManufacturerBewakoof Brands;4Th Floor; Kerom Building;Plot No; A-112,Wagle Estate;Thane;Mumbai;400604, Bewakoof Brands;4Th Floor; Kerom Building;Plot No; A-112,Wagle Estate;Thane;Mumbai;400613 PackerBewakoof Brands;4Th Floor; Kerom Building;Plot No; A-112,Wagle Estate;Thane;Mumbai;400604 ImporterBewakoof Brands;4Th Floor; Kerom Building;Plot No; A-112,Wagle Estate;Thane;Mumbai;400604 Item Weight250 g Item Dimensions LxWxH30 x 25 x 3 Centimeters Net Quantity1.00 count Generic NameT-Shirt",
      "details": "Material compositionCotton Sleeve typeLong Sleeve Material typeCotton Fit typeRegular LengthStandard Length Neck styleRound Neck Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/71hME76Fz9L._SX569_.jpg",
        "../../public/91IKmdxHDnL._SX569_.jpg",
        "../../public/513+v4yfg7L._SX569_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "U.S. POLO ASSN. Men's Casual Regular Fit Shirts",
      "rating": "3.9",
      "bought": "50",
      "discount": "-47%",
      "price": "1,209",
      "oldPrice": "2,299",
      "emi": "EMI starts at ₹110 per month. ",
      "about": "Mens shirts Additional Information ManufacturerArvind Lifestyle brands ltds, 8th Floor, Duparc Trinity, 17, MG Road, Bangalore , Karnataka 560001, Arvind Lifestyle brands ltds, 8th Floor, Duparc Trinity, 17, MG Road, Bangalore , Karnataka 560001 PackerArvind Lifestyle brands ltds, 8th Floor, Duparc Trinity, 17, MG Road, Bangalore , Karnataka 560001 ImporterArvind Lifestyle brands ltds, 8th Floor, Duparc Trinity, 17, MG Road, Bangalore , Karnataka 560001 Item Weight500 g Item Dimensions LxWxH24 x 20 x 1.5 Centimeters Net Quantity1.00 count Generic NameMen's Casual Shirts",
      "details": "Material compositionCotton PatternSolid Closure typeButton Care instructionsMachine Wash Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/71-T-8c3h5L._SY741_.jpg",
        "../../public/71xULJlZzCL._SX679_.jpg",
        "../../public/7160VSFdYML._SY741_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "DIVISIVE Men's Sequince Embroidered Cotton Blend Only Slim Fit Kurta",
      "rating": "3.9",
      "bought": "50",
      "discount": "-66%",
      "price": "799",
      "oldPrice": "2,349",
      "emi": "EMI starts at ₹277 per month.",
      "about": "Divisive Men's Cotton Blendend Long Sleeve Sequince and Thread Embroidered Kurta. ONLY KURTA, No Pyajama. SLIM FIT Kurta Fabric : Cotton Blended. Color : Burgundy. Size : L Measurements in Inches :Kurta - Length : 40 , Bust - 40, Shoulder - 18. Please Note : This is a fully stitched long kurta. It does not come with Pyajama. Two Side Pockets. Without Lining Inside of Kurta. Occasion: Wedding Wear, Festive Wear, Party Wear. Do Not Brush. Dry Cleaning Recommended.",
      "details": "Material compositionSynthetic Sleeve typeFull Sleeve LengthKnee Length Neck styleCollared Neck PatternEmbroidered StyleRegular Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/51m-uWWwEkL._SY741_.jpg",
        "../../public/61VGUzm2stL._SY741_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "Levi's 012 Classic Vest for Men with Side Branding, Tag Free Comfort & Smartskin Technology",
      "rating": "4.1",
      "bought": "200",
      "discount": "-48%",
      "price": "429",
      "oldPrice": "819",
      "emi": "EMI starts at ₹149 per month.",
      "about": "Single Jersey Cotton: Made from pure cotton, this single jersey vest for men is lightweight and moisture-absorbent. The soft, breathable fabric won't chafe, and sits gently against the skin. Smartskin Technology: Designed to provide a pleasant wearing experience, this innerwear for men is enhanced with unique Smartskin technology. This gives it a super-soft, natural hand feel for day-long comfort. Tag-Free Comfort: This vest for men is designed without any itchy tags for a smooth and pleasant experience. This ensures there is no irritation, skin abrasion, or rubbing. Long-Lasting: The neck and armholes of this vest for men are strengthened with binding for durability. It is designed with a clean-finished bottom hem for style and contoured armholes for ease of movement. 13 Stitches Per Inch: This men's innerwear has been reinforced with 13 stitches per inch using a mix of cotton and polyester sewing threads. This technique strengthens it for durability and long-lasting life.",
      "details": "PatternSolid Fit typeRegular Fit Sleeve typeSleeveless Collar styleCollarless LengthStandard Length Neck styleRound Neck Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/61eZDCysoeL.jpg"
      ],
      "category": "kitchen",
      "title": "TEKCOOL Kitchen Containers Set, Air Tight Container For Kitchen Storage Set, Kitchen Accessories Items, kitchen Organizer Items And Storage-",
      "rating": "4.8",
      "bought": "100",
      "discount": "-80%",
      "price": "298",
      "oldPrice": "1,499",
      "emi": "EMI starts at ₹103 per month.",
      "about": "Help Organize Your Kitchen and Pantry----Imagine every time walking to your kitchen or pantry, found everything is neatly organized. No longer messy, you can get everything you want very quickly. With the stackable and space-saving design, these kitchen containers set will make more efficient use of every inch of your kitchen pantry cabinets. Air Tight Containers For Kitchen Storage Keep Food Fresh----The lids with silicone gasket make these storage containers airtight, and the top flips open easily. Airtight storage system will always keep your food dry and fresh. All have the same lids make it easy to wash dry and reuse with ease. We can also use for spice containers for kitchen storage . Perfect ! plastic containers for kitchen storage . BPA Free and Food Grade Material air tight containers for snacks ---- Tekcool pantry air tight containers for storage are made of durable plastic, BPA free, which have a longer life than many other brands boxes for storage in kitchen. Clear containers make it convenient to see what’s inside, you can easily get what you want without opening every container. Space saving storage box for kitchen . Air tight container box for storage kitchen are easy to wash and can be reused again and again . It does not discolor, retain smells, or leach chemicals into food. Our glass bottles are transparent, so you’ll never have to play the guessing game with your airtight container ’s contents. perfect grocery containers for kitchen . The airtight container set for kitchen has a stylish Vertical Striped design that is for every home and business. Use this plastic container to serve coffee, tea, cocktails or create art. It has a slender hemp rope assembly tag attached to the bottleneck. Airtight container set for fridge perfectly . Air tight containers for fridge must in every kitchen.",
      "details": " Brand\tTEKCOOL Colour\tBlack Material\tGlass, Silicone, Plastic Capacity\t500 Milliliters Product Dimensions\t25L x 10W x 40H Centimeters",
      
    },
    {
      "img": [
        "../../public/7175n0M8aCL._SL1080_.jpg"
      ],
      "category": "kitchen",
      "title": "ANTIL'S Multipurpose Wire Dishwashing Rags for Wet and Dry Stainless Steel Scrubber Non-Scratch Wire Dishcloth for Washing Dishes Sinks Counters Easy Rinsing Machine Washable Pack 10",
      "rating": "4.3",
      "bought": "4k",
      "discount": "-87%",
      "price": "165",
      "oldPrice": "1,249",
      "emi": "EMI starts at ₹57 per month. ",
      "about": "Multipurpose Cleaning: Perfect for scrubbing dishes, sinks, and countertops; effective for both wet and dry use. Non-Scratch Wire Dishcloth: Gentle on surfaces, ensuring your stainless steel, glassware, and non-stick pans remain scratch-free. Durable & Long-Lasting: Made from high-quality materials, these wire dishwashing rags are built to last through tough cleaning tasks. Easy Rinsing: Designed to rinse out food particles and soap easily, keeping your cloths fresh and ready for the next use. Value Pack of 6: Comes in a pack of 10, providing ample supply for all your cleaning needs, whether in the kitchen, bathroom, or beyond.",
      "details": " Colour\tSilver Brand\tANTIL'S Material\tMetal Product Dimensions\t19.9L x 19.9W Centimeters Number of Items\t10 Product Care Instructions\tMachine Wash Shape\tRectangular Size\tMedium Net Quantity\t10 count Item Weight\t70 Grams",
      
    },
    {
      "img": [
        "../../public/31R+zHQ1K8L.jpg"
      ],
      "category": "kitchen",
      "title": "GANESH Stainless Steel Potato Crusher Vegetable Smasher Pav Bhaji Masher with Handle for Effortless Kitchen Uses (Pack of 1, Assorted)",
      "rating": "4.2",
      "bought": "3k",
      "discount": "-30%",
      "price": "76",
      "oldPrice": "109",
      "emi": "",
      "about": "Can be used to easily mash boiled potatoes and other vegetables for pav bhaji, stuffed paratha, masala dosa and more. Excellent ergonomic grip with heat-proof handle. Can be used to grind and mash tomato and gravy in any curry directly while cooking. Hygienic and easy to clean after use. Colour: Assorted, Material: Stainless Steel. Package Contents: 1-Piece Masher.",
      "details": " Material\tStainless Steel Colour\tAssorted Brand\tGANESH Item Weight\t90 Grams Product Dimensions\t10L x 10W Millimeters",
      
    },
    {
      "img": [
        "../../public/71KdMUzYXKL._SL1000_.jpg",
        "../../public/71webcv1WDL._SL1000_.jpg",
        "../../public/71x6ITRXK2L._SL1000_.jpg",
        "../../public/516jLMMeqWL._SL1000_.jpg"
      ],
      "category": "kitchen",
      "title": "Kohler Towel Rod 450mm,SS304 Stainless Steel, 2 Years Warranty, Brushed Steel Finish, Easy to use Ergonomic Design, 17kg Load Bearing Capacity",
      "rating": "4.4",
      "bought": "50",
      "discount": "-24%",
      "price": "918",
      "oldPrice": "1,200",
      "emi": "EMI starts at ₹318 per month. ",
      "about": "High strength and durability: Superior Stainless Steel 304 Grade material with high corrosion resistance. 24 hours salt spray test passed successfully. It is tested to last with 17 kg load bearing capacity Ergonomic design: Straight line angled design prevents towels from slipping and falling Unique properties: Durable, anti-peel, anti-fingerprint finish, chemical Resistant, non reactive material First in the industry 2 years brand warranty Easy to install, clean and maintain - It comes with mounting hardware kit which can be installed on your own. Simply use damp cloth for cleaning",
      "details": " Colour\tBrushed Steel Finish Material\tStainless Steel Product Dimensions\t45.6L x 4.7W x 7.8H Centimeters Finish Type\tBrushed Brand\tKohler Installation Type\tWall Mounted Shape\tRound Item Weight\t290 Grams Manufacturer\tKOHLER INDIA CORPORATION PRIVATE LIMITED, 26 A, RING ROAD, LAJPAT NAGAR-IV, NEW DELHI-110024, KOHLER INDIA CORPORATION PRIVATE LIMITED, 26 A, RING ROAD, LAJPAT NAGAR-IV, NEW DELHI-110024KOHLER INDIA CORPORATION PRIVATE LIMITED, 26 A, RING ROAD, LAJPAT NAGAR-IV, NEW DELHI-110024, KOHLER INDIA CORPORATION PRIVATE LIMITED, 26 A, RING ROAD, LAJPAT N…",
      
    },
    {
      "img": [
        "../../public/51Wy906wBDL._SL1100_.jpg",
        "../../public/61utGpuBgZL._SL1200_.jpg",
        "../../public/71Nf34uFzaL._SL1500_.jpg",
        "../../public/71QBmH3BheL._SL1500_.jpg"
      ],
      "category": "kitchen",
      "title": "GOLWYN Premium Self Adhesive Kitchen Accessories Items Organizer Rack Stand, Wall Hanging Hooks Strong Without Drilling/Bathroom Door Cloth Hanger (9 Hooks), Stainless Steel",
      "rating": "4.1",
      "bought": "1k",
      "discount": "-39%",
      "price": "259",
      "oldPrice": "425",
      "emi": "EMI starts at ₹90 per month.",
      "about": "NO DRILLING REQUIRED EASY TO INSTALL NOTE-MAKE SURE YOU ARE USING THE PRODUCT ON CLEAN AND SMOOTH SURFACE PACKAGE CONTENT- 2PC OF STICKERS, 9 HOOKS AND STAINLESS STEEL RAIL",
      "details": " Colour\tSILVER Brand\tGOLWYN Material\tIron Finish Type\tSmooth Mounting Type\tWall Mount Style\tHanging Weight Limit\t5 Kilograms Special Feature\tAdjustable Easy Install Recommended Uses For Product\tKitchen,Rack,Stand,Wall Shape\tSquare",
      
    },
    {
      "img": [
        "../../public/51BgScyg2qL._SL1000_.jpg",
        "../../public/51V-SlIdu1L._SL1000_.jpg",
        "../../public/51X8Vh3GmmL._SL1000_.jpg",
        "../../public/71Dv6FlDekL._SL1000_.jpg"
      ],
      "category": "kitchen",
      "title": "Pigeon by Stovekraft Angular Holder Shears Kitchen Knifes 6 Piece Set with Wooden Block (Stainless Steel)",
      "rating": "4.0",
      "bought": "3k",
      "discount": "-44%",
      "price": "389",
      "oldPrice": "695",
      "emi": "EMI starts at ₹135 per month.",
      "about": "Shears Knife set includes 1 - Boner Knife (25cm), 1- Utility Knife (23cm), 1- Steak Knife(22cm), 1- paring Knife(18cm), 1 - Kitchen Scissor (21cm) & 1 - Wooden Stand.;This Kithen knife set made from a single piece of stainless steel with riveted handles which gives a comfortable experience and each of them provides a proper grip. You may use the different knives to chop, slice and dice the vegetables, fruits, meat.;Material: Stainless Steel, Color: Black This amazing knife set comes with sharp knives with comfortable handles for effortless cuts, multifunctional scissors and a wooden stand to keep them well protected and clean.;Color: Silver, Material: Stainless Steel Package Contents: 1 - Boner Knife, 1- Utility Knife, 1- Steak Knife, 1- paring Knife, 1 - Scissor, 1 - Wooden Stand;Warranty: 1 year warranty on manufacturing defects. Construction Type: Forged",
      "details": " Blade Material\tStainless Steel Brand\tPigeon Colour\tSilver Handle Material\tPlastic Blade Edge\tSerrated Blade Length\t5 Centimetres Construction Type\tForged Item Weight\t307 Grams Blade Colour\tSilver Is Dishwasher Safe\tYes",
      
    },
    {
      "img": [
        "../../public/61QBU0Hc4VL._SL1000_.jpg",
        "../../public/71t7pZLLpBL._SL1500_.jpg",
        "../../public/71Td-g80ZwL._SL1500_.jpg"
      ],
      "category": "kitchen",
      "title": "CBK Dish Drying Mat for Kitchen Drying Mat for Kitchen Utensils Water Absorbent Mat Large Dry Mat for Kitchen Utensils Kitchen Linens Place Mat for Home (30 Cm * 40 Cm)",
      "rating": "3.9",
      "bought": "400",
      "discount": "-76%",
      "price": "244",
      "oldPrice": "999",
      "emi": "EMI starts at ₹85 per month. ",
      "about": "Quick water absorption & Drying:High-absorbent nanoparticles are used to make the microfibre dish drying Rack for dinnerware. Because of its softness and absorbency, the drying Rack dries fast and effectively conceals stains. Furthermore, the thickness of the dish Rack effectively shields surfaces, cutlery, and glasses from deterioration and contamination. Easy to Manage and Clean: It is possible to keep the kitchen drying Rack in the drawer without taking up additional space by rolling it up. Simply give the kitchen counter Rack a thorough underwater rinsing if necessary. Once cleaned, it can be dried by natural air circulation by being put on the countertop or hung. Anti-slip and Durable: The dish drying rack Rack's rubber backing on the bottom provides good anti-skid properties. heat-resistant, waterproof, and non-slip. Place everyday objects on the drying Rack, and they will stay put because the non-slip bottom will absorb into the table. Additionally, the rubber's bottom helps shield the table from spill damage. Dish drying pads for kitchen tableware are long-lasting, wear- and tear-resistant, and both. Kitchens, bars, bathrooms, etc. can be used in situations where you need to keep dry, and can be cut into coffee Racks, pet food Rack, placeRacks, etc. according to your needs to meet your different needs. Select number of Racks as per your requirement: You can choose more number of Racks instead of buying big Rack for easy usage and storage",
      "details": " Colour\tBLACK Material\tMicrofiber1 Product Dimensions\t30L x 40W Centimeters Brand\tCBK Item Weight\t260 Grams",
      
    },
    {
      "img": [
        "../../public/51X4l+x8tNL.jpg",
        "../../public/61-VVD2n85L.jpg",
        "../../public/71gpIqLWXjL._SL1500_.jpg"
      ],
      "category": "kitchen",
      "title": "Rasvesh Metal Kitchen Trolley Kitchen Organizer Items And Kitchen Accessories Items For Kitchen Rack Square Design For Fruits & Vegetable Onion Storage Kitchen Trolley With Wheels (4 Layer)",
      "rating": "4.3",
      "bought": "400",
      "discount": "-51%",
      "price": "2,099",
      "oldPrice": "4,288",
      "emi": "EMI starts at ₹102. No Cost EMI available ",
      "about": "Multipurpose Kitchen Shelf: It is a great choice to be your kitchen storage shelf, microwave stand, baker's rack, spice rack organizer, kitchen workstation shelf, It is perfect for kitchen, living room, bedroom, bathroom. STURDY & STABLE The fruit and vegetable storage rack is made of high quality metal, which is anti-corrosion, waterproof and anti-rust, durable for long-term reliability. The trolley rotates freely 360° with lockable universal rollers at the bottom, which help the cart can move freely and turn effortlessly stop the cart in small spaces. Easy to clean, just wipe it with a wet towel. Rolling carts with multiple baskets provide enough space for your daily storage. Fully enveloping the guardrail, encrypted wire mesh ventilation basket, allowing airflow to keep the freshness of fruits and vegetables. Multipurpose Put the sitting room, beautiful and easy practical, Fruit snacks are easily stored and neatly placed. Put the bathroom, Products not messy, you dont't need to clean the bathroom. Set the kitchen, cooking good food without fuss. Package Included: 1 Pc Rotating Vegetable Storage Rack.Material:Metal.Color:Black",
      "details": " Product Dimensions\t39D x 21W x 33H Centimeters Shelf Type\tTiered Shelf Material\tMetal Frame Material\tMetal Brand\tRasvesh Colour\tBlack Furniture Finish\tBlack Style\tLayer 5 Maximum Weight Recommendation\t8 Kilograms Size\t4 Layer",
      
    },
    {
      "img": [
        "../../public/61Nbbwvh8mL._SY741_.jpg",
        "../../public/81afCnqYRsL._SY741_.jpg",
        "../../public/81zcQ0yWKqL._SY741_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "Leriya Fashion Dresses for Women | Maxi Dresses for Women | One Piece Dress for Women Long | Women Dresses",
      "rating": "3.8",
      "bought": "300",
      "discount": "-80%",
      "price": "409",
      "oldPrice": "1,999",
      "emi": "EMI starts at ₹142 per month. ",
      "about": "Soft rayon blend: this one-piece dress for women is made of a soft rayon blend material, featuring with floral printed beach dress for women. Style & length: this birthday dress for women western has midi length, front open collar option with button in front of dress characterize this outfit. Occasions: Leriya Fashion one piece dress for women party wear is used for western wear, office wear, night wear, beach wear, summer wear, hangouts, picnic, vacation wear, and birthday party wear dress. Summer Beach Wear: beach party wear one piece dress embraces the season in style with our summer collection, designed to keep you cool and fashionable in the warmer months. Size recommendation: please use the infographic size chart guidance to determine your perfect size; a size large is recommended for a comfortable fit.",
      "details": "Material typeRayon Blend LengthKnee-Length Occasion typeParty Sleeve typeHalf Sleeve PatternPrinted StyleFit And Flare Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/51z7A0nyN3L._SY741_.jpg",
        "../../public/51zYLVS36ZL._SX569_.jpg",
        "../../public/513ynhTPBuL._SX569_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "SRL Women's Floral Printed Art Silk Saree With Blouse Piece (2108S237_BZ_Pink & Beige)",
      "rating": "3.8",
      "bought": "100",
      "discount": "-73%",
      "price": "439",
      "oldPrice": "1,650",
      "emi": "EMI starts at ₹152 per month.",
      "about": "Saree Length:5.5m Blouse Piece Length (m):0.7 Blouse Pattern:Solid Blouse Fabric:Silk::Cotton",
      "details": "Material compositionCotton Silk Occasion typeFestival, Party, Wedding Care instructionsDry Clean Only Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/41zYLk1ImiL._SY741_.jpg",
        "../../public/51SIgJ7CE5L._SY741_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "Raghav Silk Cotton Blend Straight Embroidery Kurti for Women",
      "rating": "3.3",
      "bought": "100",
      "discount": "-50%",
      "price": "349",
      "oldPrice": "699",
      "emi": "EMI starts at ₹121 per month. ",
      "about": "Premium Fabric: Made from high-quality cotton blend for ultimate comfort and breathability. Elegant Design: Features a stylish and trendy design, perfect for both casual and formal wear. Comfortable Fit: Tailored for a comfortable fit with various sizes available to suit all body types. Vibrant Colors & Patterns: Available in a range of vibrant colors and beautiful embroidery patterns that retain their richness even after multiple washes. Versatile Style: Perfect for various occasions—office, daily wear, festive events, and more. Easy Maintenance: Machine washable and easy to care for, ensuring long-lasting wear.",
      "details": "Material composition75% Cotton Sleeve type3/4 Sleeve LengthCalf Length Neck styleRound Neck PatternSolid StyleA-Line Country of OriginIndia",
      
    },
    {
      "img": [
        "../../public/61dBD+Enw7L._SY741_.jpg",
        "../../public/61wn6jRgspL._SY741_.jpg",
        "../../public/61XsP+EOJFL._SY741_.jpg",
        "../../public/71ls46sxBTL._SY741_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "Rosary Women's Winter Wear Jacquard Woolen Straight Kurti with 2 Side Pockets,1PCS-JACQ-RY05",
      "rating": "4.0",
      "bought": "",
      "discount": "-78%",
      "price": "899",
      "oldPrice": "3,999",
      "emi": "EMI starts at ₹312 per month.",
      "about": "Component: Single Kurti Features: Straight Kurti, Full Sleeves, Mandarin Collar V Neck, Calf Length, 2 Side Pockets, Jacquard Knitting, Length is 45-46 Inches Note: Hand Wash Is Suggested To Avoid Pilling On Garment / Length Is 45-46 Inches. The Model Height 5.7 Is Wearing a Size M Material: Soft Woolen Occasion: Suitable for winter wear, casual outings, parties, and festive occasions. This Kurti offers versatility and comfort, pairing seamlessly with palazzos, jeans, and contrast leggings.",
      "details": "ManufacturerRosy Fashions, Rosy Fashions, Vijay Nagar, Tajpur Rd, near water Tank, Geeta Colony, Ramesh Nagar, Ludhiana, Punjab 141010, 7837373737 PackerRosy Fashions, Vijay Nagar, Tajpur Rd, near water Tank, Geeta Colony, Ramesh Nagar, Ludhiana, Punjab 141010, 7837373737 Item Weight499 g Item Dimensions LxWxH25 x 15 x 3 Centimeters Included ComponentsKurti Generic NameKurti",
      
    },
    {
      "img": [
        "../../public/71a0JwfzJ3L._SX569_.jpg",
        "../../public/71Gaa9W4PdL._SX569_.jpg",
        "../../public/71nHq8Qh2BL._SX569_.jpg",
        "../../public/81Zsb4pXgjL._SX569_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "Yash Gallery Women's Rayon Printed Anarkali Kurta for Women",
      "rating": "4.1",
      "bought": "",
      "discount": "-82%",
      "price": "759",
      "oldPrice": "4,299",
      "emi": "EMI starts at ₹263 per month. ",
      "about": "Color - Blue || Size - L Material/Fabric - Rayon Style - A-Line || Pattern - Geometric Print Contains - Only Kurta Special Notes - Before Ordering Please Check Your Measurement to Make Sure the Item Fits You. Select the Correct Size from Dropdown; - For Detail of Measurements Please Refer to Our Size Chart",
      "details": "ManufacturerAASHIRWAD GARMENTS, 55 TO 64, Tantiyawas, Birij Vihar, Amber Tantiyawas Jaipur, Tantiyawas, Rampura Dabri, Rajasthan, 303704 Packer55 TO 64, Tantiyawas, Birij Vihar, Amber Tantiyawas Jaipur, Tantiyawas, Rampura Dabri, Rajasthan, 303704 Item Weight250 g Item Dimensions LxWxH22 x 20 x 1.5 Centimeters Net Quantity1.00 count Included Componentskurta Generic Namekurta",
      
    },
    {
      "img": [
        "../../public/61FSn2cs8RL._SY741_.jpg",
        "../../public/61GCja0NO2L._SY741_.jpg",
        "../../public/71uRqiL7KZL._SX679_.jpg",
        "../../public/81uJ16G3iCL._SY741_.jpg",
        "../../public/6148dDsWX-L._SX679_.jpg"
      ],
      "category": "clothing & accessories",
      "title": "idaLia Ethnic Kurta Set for Women 3/4 Sleeve, Round Neck Cotton A-line Solid Kurta with Palazzo Pant Set",
      "rating": "4.0",
      "bought": "",
      "discount": "-70%",
      "price": "954",
      "oldPrice": "3,199",
      "emi": "EMI starts at ₹331 per month.",
      "about": "Elegant Cotton Kurta Sets for Women - Our Mustard and Sage Green Straight Cotton Kurta with Palazzo Pant Set is great for those seeking designer kurta sets that are both stylish and comfortable for festive occasions. High-Quality Fabric & Design - This ethnic kurta set features a cotton slub top and bottom, ensuring a soft and breathable feel. The 3/4 sleeve pattern and calf-length kurta make it an ideal choice for festival kurta sets. Versatile and Stylish - Buy kurta sets online like this one for a versatile addition to your wardrobe. With a solid top and printed palazzo pant, this set is suitable for both festive and party events, making it a go-to online kurta set. Easy Care Instructions - For a great kurta set online experience, this cotton kurta set online is machine washable (cold) and can be tumble dried on low. For optimal results, dry cleaning is suggested to maintain its vibrant colors. Shop with Confidence - Our kurta set online shopping offers a luxurious and comfortable outfit that will make you stand out. Choose this Mustard and Sage Green Straight Cotton Kurta with Palazzo Pant Set for a stunning, timeless look.",
      "details": "ManufacturerIdalia, Idalia Panache Pvt Ltd,Plot no 110, Kanwar Nagar, Near Rochees garden, Jaipur, 302002 PackerIdalia Panache Pvt Ltd,Plot no 110, Kanwar Nagar, Near Rochees garden, Jaipur, 302002 ImporterIdalia Panache Pvt Ltd,Plot no 110, Kanwar Nagar, Near Rochees garden, Jaipur, 302002 Item Weight360 g Item Dimensions LxWxH76 x 20 x 6 Centimeters Net Quantity2.00 count Included Components1 Kurta,1 Palazzo Generic Namekurta",
      
    },
    {
      "img": [
        "../../public/81q6N8RQhPL._SL1500_.jpg",
        "../../public/712K3sdLlRL._SL1500_.jpg"
      ],
      "category": "books",
      "title": "Dopamine Detox : A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things Paperback – 13 May 2023 by Thibaut Meurisse (Author)",
      "rating": "4.4",
      "bought": "",
      "discount": "-19%",
      "price": "199",
      "oldPrice": "245",
      "emi": "EMI starts at ₹69 per month. ",
      "about": "Reclaim your focus in 48 hours or less. Do you keep procrastinating? Do you feel restless and unable to focus on your work? Do you have trouble getting excited about major goals? If so, you might need a dopamine detox. In today’s world where distractions are everywhere, the ability to focus has become more and more difficult to achieve. We are constantly being stimulated, feeling restless, often without knowing why. When the time comes to work, we suddenly find an excess of other things to do. Instead of working toward our goals, we go for a walk, grab a coffee, or check our emails. Everything seems like a great idea—everything except the very things we should be doing. Do you recognize yourself in the above situation? If so, don’t worry. You’re simply overstimulated. Dopamine Detox will help you lower your level of stimulation and regain focus in 48 hours or less,so that you can tackle your key tasks. More specifically, in Dopamine Detox you’ll discover: what dopamine is and how it works; the main benefits of completing a dopamine detox; 3 simple steps to implement a successful detox in the next 48 hours; practical exercises to eliminate distractions and boost your focus; simple tools and techniques to avoid overstimulation and help you stay focused, and much more. Dopamine Detox is your must-read, must-follow guide to help you remove distractions so you can finally work on your goals with ease. If you like easy-to-understand strategies, practical exercises, and no-nonsense teaching, you will love this book.",
      "details": "",
      
    },
    {
      "img": [
        "../../public/71pEaSYkhsL._SL1500_.jpg",
        "../../public/81QQD9viq2L._SL1500_.jpg"
      ],
      "category": "books",
      "title": "The Art of Letting Go: Move Beyond the Hurt, Find Emotional Freedom and Restore Your Inner Peace Paperback – 25 June 2024",
      "rating": "4.5",
      "bought": "",
      "discount": "-47%",
      "price": "159",
      "oldPrice": "299",
      "emi": "EMI starts at ₹55 per month.",
      "about": "Your mind should ideally be your safe zone, not the noisiest place in the world. Although that is rarely the case, and if you are always on edge and unable to relax, this book is for you.  Control your thoughts. Manage your happiness. Restore your inner peace. With help from psychologically proven tips to get out of your mind and into your life:  Practicing nonjudgment and observation over your emotions. Untangling the toxic beliefs of urgency and danger in your brain. How to use brain dumping in the most calming way possible. Exercises for self-distancing and externalization: powerful psychological techniques. Defeating your drive for perfection while finding a drive for excellency.  The Art of Letting Go is about organizing the mess in our minds. For that, it is important not to dwell on the past, or obsess over the future that may never occur; but that is easier said than done. Learn how to trust that things will be okay, how to control your self-talk, and transform your internal worldview.",
      "details": "",
      
    },
    {
      "img": [
        "../../public/71+iTNvy0BL._SL1500_.jpg",
        "../../public/81yrXnSfr-L._SL1500_.jpg",
        "../../public/715qi-cIbML._SL1500_.jpg"
      ],
      "category": "books",
      "title": "Don't Believe Everything You Think (English) Paperback – 25 November 2022",
      "rating": "4.5",
      "bought": "",
      "discount": "-38%",
      "price": "185",
      "oldPrice": "299",
      "emi": "EMI starts at ₹64 per month.",
      "about": "Discover how to conquer anxiety, self-doubt, and self-sabotage without depending on motivation or willpower. 'Don't Believe Everything You Think' uncovers the core of psychological suffering and offers insights to effortlessly shape the life you crave. Learn to detach from negativity, embrace love and joy, escape negative thought cycles, and tap into inner wisdom. The message is clear: anyone can attain peace, love, and fulfillment, irrespective of their history. It's not about rewiring your brain, but expanding your consciousness for lasting transformation. Within this book, delve into the core of emotional suffering and receive insights on effortlessly curating the life you aspire to.",
      "details": "",
      
    },
    {
      "img": [
        "../../public/51LPyet6LxL._SL1500_.jpg",
        "../../public/61CbwWxAW7L._SL1500_.jpg",
        "../../public/61Le4Mn1AYL._SL1500_.jpg"
      ],
      "category": "books",
      "title": "Metamorphosis by Franz Kafka [Premium Paperback]: An Unsettling Exploration of Identity and Alienation | Existential Literature |Classic Literature| Psychological Fiction| Metaphorical Allegory Paperback – 10 May 2024",
      "rating": "4.4",
      "bought": "",
      "discount": "-56%",
      "price": "88",
      "oldPrice": "199",
      "emi": "EMI starts at ₹64 per month.",
      "about": "Metamorphosis is a timeless novella that plunges readers into the surreal and unsettling world of Gregor Samsa, a young man who wakes up one morning to find himself transformed into a monstrous insect. Written by the acclaimed German-speaking author Franz Kafka, this iconic story explores themes of alienation, identity, and existential angst, captivating readers with its surreal exploration of the human psyche.  Here’s why this classic title is a must read:  • Psychological Exploration: Through Gregor's harrowing experiences and inner turmoil after having turned into an insect, Kafka invites readers to confront their deepest fears and anxieties on the nature of identity and the human condition. • Social Commentary: As Gregor grapples with his grotesque transformation and its repercussions on his family and society, Kafka exposes the absurdity and cruelty of human existence, challenging readers to question societal norms and the pursuit of material success. • Existential Themes: Kafka's exploration of existential themes such as social and self-isolation, alienation, and the quest for meaning speaks to the timeless struggles of the human condition. • Emotional Depth: The emotional struggles faced by Gregor and his family are portrayed with intense realism, drawing readers into the pain and despair of a life transformed against one's will. • Universal Relevance: Kafka's exploration of existential themes such as social and self isolation, alienation, and the quest for meaning speaks to the timeless struggles of the human condition across generations and cultures, offering profound insights into the complexities of modern life.  As the world grapples with existential questions and the search for meaning, Metamorphosis serves as a haunting reminder of the fragility of identity and the inherent absurdity of existence. If you're seeking a thought-provoking read that challenges conventional notions of reality and selfhood, Franz Kafka's Metamorphosis is an essential addition to your reading list.",
      "details": "",
      
    }])
  }

  f()

  const location = useLocation()
  let user = {
    name: "", mobile: 0
  };
  if (location.state) {
    user.name = location.state.name
    user.mobile = location.state.mobile
  }

  if (logout && logout.logout == "true") {
    location.state = null;
  }

  useEffect(() => {
    console.log("location.state from home : ", location.state)
    if (location.state?.buy && location.state?.phone) {
      location.state.buy = { ...location.state.buy, userPhone: location.state.phone, userName: location.state.name }
    }
  }, [location])

  return (
    <div style={{ backgroundColor: "#e8e8e8" }}>
      <Navbar name={user.name} mobile={user.mobile} />
      <Nav2 />
      <Carousel />
      <Objects1 />
      <Kitchen />
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Home