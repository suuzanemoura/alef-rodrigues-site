import type {
  PageObjectResponse,
  QueryDataSourceResponse,
} from "@notionhq/client/build/src/api-endpoints";

type DataSourceResult = QueryDataSourceResponse["results"][number];

export type NotionProperties = PageObjectResponse["properties"];

export function isFullPage(item: DataSourceResult): item is PageObjectResponse {
  return item.object === "page" && "properties" in item;
}

export function getTitle(property: NotionProperties[string]) {
  if (property.type !== "title") return "";
  return property.title[0]?.plain_text ?? "";
}

export function getRichText(property: NotionProperties[string]) {
  if (property.type !== "rich_text") return "";
  return property.rich_text[0]?.plain_text ?? "";
}

export function getCheckbox(property: NotionProperties[string]) {
  if (property.type !== "checkbox") return false;
  return property.checkbox ?? false;
}

export function getNumber(property: NotionProperties[string]) {
  if (property.type !== "number") return 0;
  return property.number ?? 0;
}

export function getUrl(property: NotionProperties[string]) {
  if (property.type === "url") return property.url ?? "";
  if (property.type === "rich_text")
    return property.rich_text[0]?.plain_text ?? "";
  return "";
}
