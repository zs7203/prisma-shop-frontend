export default {
  baseUrl: "http://localhost:4466/prisma-demo/dev",
  index: {
    banners: {
      "query": "{\n  adPosition(where: {\n    id: \"cjfich3av001c0894dkuxupz1\"\n  }){\n    ads(orderBy:createdAt_ASC){\n      id\n      link\n      image_url\n    }\n  }\n}"
    },
    channels: {
      "query": "{\n  channels{\n    name\n    url\n    icon_url\n  }\n}"
    },
    newProducts: {
      "query": "{\n  products(\n    where: {\n    \tis_new: true\n  \t}\n    first: 4\n    orderBy: createdAt_DESC\n  ){\n    code\n    name\n    list_pic_url\n    retail_price\n  }\n}"
    },
    hotProducts: {
      "query": "{\n  products(\n    where: {\n    \tis_hot: true\n  \t}\n    first: 4\n    orderBy: createdAt_DESC\n  ){\n    code\n    name\n    list_pic_url\n    retail_price\n  }\n}"
    },
    brands: {
      "query": "{\n  brands(\n    where: {\n    \tis_new: true\n  \t}\n    orderBy: sort_order_ASC\n  ){\n    code\n    name\n    floor_price\n    new_pic_url\n  }\n}"
    },
    topics: {
      "query": "{\n  topics(first: 3){\n    code\n    scene_pic_url\n    title\n    subtitle\n    price_info\n  }\n}"
    },
    cates: {
      "query": "{\n  categories(where: {\n    name_not: \"推荐\"\n  }){\n    code\n    name\n    subs {\n      products(first: 3) {\n        code\n        name\n        list_pic_url\n        retail_price\n        \n      }\n    }\n  }\n}\n\n"
    }
  },
  category: {
    currentPrimaryCategory: {
      "query": "query getCategory($code: Int!){\n  category(where: {\n    code: $code\n  }){\n    banner_url\n    front_desc\n    front_name\n    icon_url\n    code\n    img_url\n    is_show\n    keywords\n    level\n    name\n    show_index\n    sort_order\n    type\n    wap_banner_url\n  }\n}\n"
    },
    primaryCateList: {
      "query": "query getCategories{\n  categories{\n    banner_url\n    front_desc\n    front_name\n    icon_url\n    code\n    img_url\n    is_show\n    keywords\n    level\n    name\n    show_index\n    sort_order\n    type\n    wap_banner_url\n  }\n}\n"
    },
    primaryCateProductsList: {
      "query": "query getProductsList($code: Int!) {\n\tproductsConnection(where: {\n    category: {\n      parent: {\n        code: $code\n      }\n    }\n  }){\n    pageInfo{\n      hasNextPage\n    }\n    edges{\n      node {\n        code\n        list_pic_url\n        name\n        retail_price\n      }\n      cursor\n    }\n  }\n}"
    },
    currentSubCategory: {
      "query": "query currentSubCatetory($code: Int!) {\n  subCategory(where: {\n    code: $code\n  }){\n    name\n    front_name\n  }\n}"
    },
    subCateList: {
      "query": "query getSubCategories($code: Int!) {\n  subCategory(where: {\n    code: $code\n  }){\n    parent{\n      subs{\n        code \n        name\n      }\n    }\n  }\n}"
    },
    subCateProductsList: {
      "query": "query subCateProductsList($code: Int!) {\n  products(where: {\n    category: {\n      code: $code\n    }\n  }){\n    code\n    list_pic_url\n    name\n    retail_price\n  }\n}"
    }
  },
  brand: {
    brandById: {
      "query": "query getBrand($code: Int!) {\n  brand(where: {\n    code: $code \n  }){\n    app_list_pic_url\n    floor_price\n    id\n    is_new\n    is_show\n    list_pic_url\n    name\n    new_pic_url\n    new_sort_order\n    pic_url\n    simple_desc\n    sort_order\n  }\n}"
    }
  },
  topic: {
    topicById: {
      "query": "query getTopic($code: Int!){\n  topic(where: {\n    code: $code\n  }){\n  avatar\n  content\n  id\n  is_show\n  item_pic_url\n  price_info\n  read_count\n  scene_pic_url\n  sort_order\n  subtitle\n  title\n  topic_tag_id\n  topic_template_id\n  }\n}"
    },
    relateTopics: {
      "query": "query getRelateTopics($code: Int!){\n  topics(\n    where: {\n    code_not: $code \n  \t}\n  \tfirst: 4\n  ){\n  avatar\n  content\n  id\n  is_show\n  item_pic_url\n  price_info\n  read_count\n  scene_pic_url\n  sort_order\n  subtitle\n  title\n  topic_tag_id\n  topic_template_id\n  }\n}"
    },
    topicCommentList: {
      "query": "query queryComments($topic: Int!) {\n  comments(\n    where: {\n      value_id: $topic\n      type_id: 1\n    }\n    first: 5\n  ){\n    code\n    createdAt\n    content\n  }\n}"
    }
  },
  catalog: {
    categories: {
      "query": "query getCategories{\n  categories(orderBy: code_ASC){\n    banner_url\n    front_desc\n    front_name\n    icon_url\n    code\n    img_url\n    is_show\n    keywords\n    level\n    name\n    show_index\n    sort_order\n    type\n    wap_banner_url\n  }\n}"
    },
    currentCategory: {
      "query": "query getcurrentCategory($code: Int!){\n  category(where: {\n    code: $code\n  }){\n    banner_url\n    front_desc\n    front_name\n    icon_url\n    code\n    img_url\n    is_show\n    keywords\n    level\n    name\n    show_index\n    sort_order\n    type\n    wap_banner_url\n    subs{\n      code\n      banner_url\n      front_desc\n      front_name\n      icon_url\n      id\n      img_url\n      is_show\n      keywords\n      level\n      name\n      show_index\n      sort_order\n      type\n      wap_banner_url\n    }\n  }\n}"
    },
    availableProductsCount: {
      "query": "query getAvailableProductsCount{\n  productsConnection(where: {\n    is_on_sale: true\n    is_delete: false\n  }){\n    aggregate{\n      count\n    }\n  }\n}"
    },
  },
  product: {
    getById: {
      "query": "query getProduct($code: Int!){\n  product(where: {\n    code: $code\n  }){\n    code\n    app_excluesive_price\n    counter_price\n    extra_price\n    product_brief\n    product_desc\n    product_number\n    product_sn\n    product_unit\n    is_delete\n    is_hot\n    is_limited\n    is_new\n    is_on_sale\n    keywords\n    list_pic_url\n    name\n    primary_pic_url\n    primary_product_id\n    promotion_desc\n    promotion_tag\n    retail_price\n    sell_volume\n    sort_order\n    unit_price\n    attributes{\n      parent{\n        name\n      }\n      value\n    }\n    gallery(first: 4){\n      img_url\n    }\n    comments(first: 1){\n      createdAt\n      content\n      comment_pics{\n        id\n        code\n        pic_url\n        sort_order\n      }\n    }\n    brand{\n      app_list_pic_url\n      floor_price\n      id\n      is_new\n      is_show\n      list_pic_url\n      name\n      new_pic_url\n      new_sort_order\n      pic_url\n      simple_desc\n      sort_order\n    }\n    specs{\n      code\n      value\n      pic_url\n    }\n    stock{\n      code\n      type\n      sn\n      total\n    }\n  }\n}"
    },
    policy: {
      "query": "{\n  policies{\n    id\n    question\n    answer\n  }\n}"
    },
    commentsCount: {
      "query": "{\n  commentsConnection(where: {\n    product: {\n      code: 1006013\n    }\n  }){\n    aggregate{\n      count\n    }\n  }\n}"
    },
    realteProducts: {
      "query": "query getRelateProducts($code: Int!){\n  product(where: {\n    code: $code\n  }){\n    category{\n      products(\n        where: {\n        \tcode_not: $code\n      \t}\n        first: 8\n      ){\n        code\n        name\n        list_pic_url\n        retail_price\n      }\n    }\n  }\n}"
    },
    specificationList: {
      "query": "query getProductSpec($code: Int!) {\n  specifications(where: {\n    product_specs_every: {\n      product: {\n        code: $code\n      }\n    }\n  }){\n    code\n    name\n    product_specs{\n      code\n      value\n      pic_url\n    }\n  }\n}"
    }
  },
  cart: {
    add: {
      "query": "mutation createCart(\n  $userConnection: Int!\n  $session_id: Int!\n  $productConnection: Int!\n  $count: Int!\n){\n  createCart(data: {\n    user: {\n      connect: {\n        code: $userConnection\n      }\n    }\n    session_id: $session_id\n    product_stock: {\n      connect: {\n        code: $productConnection\n      }\n    }\n    count: $count\n  }){\n    id\n  }\n}"
    },
    getCartByUserId: {
      "query": "query getCart($userConnection: Int!){\n  cartsConnection(where: {\n    user: {\n      code: $userConnection\n    }\n  }){\n    aggregate{\n      count\n    }\n    edges{\n      node{\n        id\n        count\n        checked\n        product_stock{\n          retail_price\n          spec{\n            value\n          }\n          product{\n            name\n            list_pic_url\n            retail_price\n    \t\t\t\tspecs{\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n}"
    },
    checkCartItem: {
      "query": "mutation checkCartItem($id: ID!, $checked: Boolean!) {\n  updateCart(\n    where: {\n    \tid: $id\n  \t}\n    data: {\n      checked: $checked\n    }\n  ){\n    product_stock{\n      product{\n        name\n      }\n    }\n    checked\n  }\n}"
    },
    batchCheckItems: {
      "query": "mutation checckedAllItems($checked: Boolean!) {\n  updateManyCarts(where: {user: {code: 1}}, data: {checked: $checked}) {\n    count\n  }\n}\n"
    },
    updateItemCount: {
      "query": "mutation updateCartItemCount($id: ID!, $count: Int!) {\n  updateCart(where: {\n    id : $id\n  } data: {\n    count: $count\n  }){\n    count\n  }\n}"
    },
    deleteCartItems: {
      "query": "mutation batchDeleteCartItems($ids: [ID!]!) {\n  deleteManyCarts(where: {\n    id_in: $ids\n  }){\n    count\n  }\n}"
    }
  }
}


