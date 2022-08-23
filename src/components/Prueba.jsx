import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";

const Prueba = () => {
  const QUERY = gql`
    query FeaturedCollections {
      collections(
        first: 4
        query: "collection_type:smart"
        sortKey: UPDATED_AT
      ) {
        nodes {
          id
          title
          handle
          image {
            altText
            width
            height
            url
          }
        }
      }
    }
  `;

  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });
  console.log(collections);

  return (
    <>
      <div>
        {collections.nodes.map((collection) => {
          <h2 className="whitespace-pre-wrap max-w-prose font-medium text-copy">
            {collection.title}
          </h2>;
        })}
      </div>
    </>
  );
};

export default Prueba;
