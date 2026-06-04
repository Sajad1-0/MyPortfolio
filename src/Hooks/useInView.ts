import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
    threshold?: number;
    rootMargin?: string;
    root?: Element | Document | null;
}

export const useInView = ({
    threshold = 0.1,
    rootMargin,
    root = null,
}: UseInViewOptions = {}) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold, rootMargin, root }
        );

        observer.observe(node);
        return () => observer.unobserve(node);
    }, [threshold, rootMargin, root]);

    return { ref, isInView };
};
