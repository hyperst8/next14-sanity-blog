import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30; // revalidate this page every 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        smallDescription,
        content,
        titleImage,
        tags[]-> {
            "currentSlug": slug.current,
            tagName
          }
        }[0]
    `;
  const data = await client.fetch(query);

  return data;
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="my-10">
      <h1 className="mt-8 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
        {data.title}
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        alt={data.title}
        width={800}
        height={800}
        priority
        className="mt-8 rounded-lg border"
      />

      <p className="mt-6 text-lg">{data.smallDescription}</p>

      <div className="flex gap-2 mt-2">
        {data.tags.map((tag, idx) => (
          <span
            key={idx}
            className="mt-8 font-bold text-small text-gray-500 dark:text-gray-300"
          >
            #{tag.tagName}
          </span>
        ))}
      </div>

      <div className="mt-16 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
