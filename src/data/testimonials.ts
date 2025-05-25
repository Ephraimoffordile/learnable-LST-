// src/data/testimonials.ts

export interface TestimonialItem {
    id: string;
    message: string;
    avatar: string;
    name: string;
    role: string;
    rating: number; // Added rating for stars
}

export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
}

export const testimonials: TestimonialItem[] = [
    {
        id: "1",
        message: "late helps you see how many more days you need to work to reach your financial goal.",
        avatar: "regina-avarta.jpg", 
        name: "Regina Miles",
        role: "Designer",
        rating: 4, 
    },
   
    /*
    {
        id: "2",
        message: "",
        avatar: "",
        name: "John Doe",
        role: "Developer",
        rating: 5,
    },
    */
];

export const galleryImages: GalleryImage[] = [
    { id: "g1", src: "images/gallery/image1.jpg", alt: "Gallery Image 1" },
    { id: "g2", src: "images/gallery/image2.jpg", alt: "Gallery Image 2" },
    { id: "g3", src: "images/gallery/image3.jpg", alt: "Gallery Image 3" },
    { id: "g4", src: "images/gallery/image4.jpg", alt: "Gallery Image 4" },
    { id: "g5", src: "images/gallery/image5.jpg", alt: "Gallery Image 5" },
    { id: "g6", src: "images/gallery/image6.jpg", alt: "Gallery Image 6" },
    { id: "g7", src: "images/gallery/image7.jpg", alt: "Gallery Image 7" },
    { id: "g8", src: "images/gallery/image8.jpg", alt: "Gallery Image 8" },
    { id: "g9", src: "images/gallery/image9.jpg", alt: "Gallery Image 9" },
];