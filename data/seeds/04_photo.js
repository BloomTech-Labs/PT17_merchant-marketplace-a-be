exports.seed = function (knex) {
  // Inserts seed entries
  return knex('photo').insert([
    {
      item_id: 1,
      url:
        'https://www.dontsweattherecipe.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/01/italian-sausage-11.jpg.webp',
    },

    {
      item_id: 2,
      url:
        'https://ucarecdn.com/c87d040a-1e0f-4711-9372-057931c55397/W501001.jpg',
    },

    {
      item_id: 3,
      url:
        'https://ucarecdn.com/0a83e130-76d4-4efb-a340-b9e37fb8182e/TuftedPolypropyleneFloorCarpetTileManufacturerPVCBackingOfficeCommercialCarpetTilesBuildingMaterialsFloorCarpetTile.jpg',
    },

    {
      item_id: 4,
      url:
        'https://cdn.shopify.com/s/files/1/0081/6703/0842/products/XA-F-60X38-GG_532x532.jpg?v=1616133307',
    },

    {
      item_id: 5,
      url:
        'https://i5.walmartimages.com/asr/a354b2e3-8718-4ff1-b931-75b56b38e8fe_1.63f25024bca3784efd2b5eb134a9eb41.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
    },

    {
      item_id: 6,
      url:
        'https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/POLL/b-9ypwsdaesh3j228kut4a.jpg',
    },

    {
      item_id: 7,
      url:
        'https://images-na.ssl-images-amazon.com/images/I/813IEbcDgjL._AC_SL1500_.jpg',
    },

    {
      item_id: 8,
      url:
        'https://i.etsystatic.com/6964899/r/il/80bfec/1673150680/il_794xN.1673150680_in6c.jpg',
    },

    {
      item_id: 9,
      url:
        'https://ucarecdn.com/d838aa8d-cdee-4a81-b102-0dcb60a6c77e/71v1hQHZDML_AC_UL1200_.jpg',
    },

    {
      item_id: 10,
      url:
        'https://ucarecdn.com/fb62a644-cbc1-412b-bad6-0e67ff89c1d8/6797851604336449220648.jpg',
    },

    {
      item_id: 11,
      url:
        'https://ucarecdn.com/7e038723-ab8a-4b69-a208-42e1a6f320ec/dartpilee1417213657157.jpg',
    },
    {
      item_id: 12,
      url:
        'https://ucarecdn.com/be984572-e392-45dd-be97-d94ed54ada75/lostbook.jpg',
    },
    {
      item_id: 13,
      url:
        'https://ucarecdn.com/7306922c-ad15-4fbc-bc1c-47b8fe5a77b3/KerbalSpaceProgram2.jpg',
    },
    {
      item_id: 14,
      url:
        'https://ucarecdn.com/2efcfd41-67a2-4569-ad2c-73daa58e1945/small_logo.png',
    },
  ]);
};
