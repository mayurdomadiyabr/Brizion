import Link from 'next/link';

interface CategoryCardProps {
    title: string;
    slug: string;
    imageBgColor: string;
}

export default function CategoryCard({ title, slug, imageBgColor }: CategoryCardProps) {
    return (
        <Link href={`/collections/${slug}`} className="group flex flex-col items-center gap-4 cursor-pointer">
            <div
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-lg border border-border"
                style={{ backgroundColor: imageBgColor }}
            >
                <div className="text-white/80 font-serif text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ✨
                </div>
            </div>
            <h3 className="font-medium text-sm sm:text-base text-center group-hover:text-brand-600 transition-colors">
                {title}
            </h3>
        </Link>
    );
}
