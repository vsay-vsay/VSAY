import { NavbarButton } from "@/app/components/atom/navbutton"
import { HeroParallaxs } from "@/app/components/atom/productparallex";
import { ProductDetails } from "@/app/components/ui/producttimeline";

const Products: React.FC = () => {
    return (
        <>
            <NavbarButton />
            <HeroParallaxs />
            <ProductDetails />
        </>
    )
}

export default Products;