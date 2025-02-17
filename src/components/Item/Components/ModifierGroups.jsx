import { useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import ModifierGroupsItems from "./ModifierGroupsItems";

export default function ResponsiveStack() {
  const modifierGroups = [
    {
      name: "Fried or Grilled",
      maxSelections: 1,
      minSelections: 1,
      pricingMode: "INCLUDED",
      guid: "5e744144-4951-4b1b-b998-c56213b825a9",
      __typename: "ModifierGroup",
      modifiers: [
        {
          itemGuid: "bf75a4b5-3a55-4642-93ff-59cecca0d4b9",
          itemGroupGuid: null,
          selected: true,
          name: "Fried",
          price: 0,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: true,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "68bc94b9-60cf-476e-aa11-20c42e96618f",
          itemGroupGuid: null,
          selected: false,
          name: "Grilled",
          price: 0,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
      ],
    },
    {
      name: "Sauces",
      maxSelections: 3,
      minSelections: 0,
      pricingMode: "INCLUDED",
      guid: "b94e0989-b0e4-4d6e-9f9b-2883c2c7b66b",
      __typename: "ModifierGroup",
      modifiers: [
        {
          itemGuid: "683b66c3-56a0-400e-8b10-a631128f6aa6",
          itemGroupGuid: null,
          selected: false,
          name: "BBQ Sauce",
          price: 0,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "528b0b87-fb61-48ae-947d-0f583f39c3ec",
          itemGroupGuid: null,
          selected: false,
          name: "Honey BBQ Sauce",
          price: 0,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "5d09b2f0-81f0-4ed6-bc7d-4f9a4a81776f",
          itemGroupGuid: null,
          selected: false,
          name: "Buffalo Sauce",
          price: 0,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "7812e0b5-c53a-4b11-9385-21dd7a49e9b4",
          itemGroupGuid: null,
          selected: false,
          name: "Blue Cheese Sauce",
          price: 0,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "0f94c57b-8b02-4ec0-91b4-f04d2ef3191d",
          itemGroupGuid: null,
          selected: false,
          name: "Hot Sauce",
          price: 0,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "5e8a0f34-8e76-4ded-96f0-ee66201e8359",
          itemGroupGuid: null,
          selected: false,
          name: "Extra Hot Sauce",
          price: 0,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "9199b2c9-687e-4fe5-88f2-e33664fa6b30",
          itemGroupGuid: null,
          selected: false,
          name: "Lemon pepper Sauce",
          price: 0,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "3037a725-34ab-4490-a8a8-c5acf9f15268",
          itemGroupGuid: null,
          selected: false,
          name: "Ranch Sauce",
          price: 0,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
      ],
    },
    {
      name: "Fries",
      maxSelections: 1,
      minSelections: 0,
      pricingMode: "ADJUSTS_PRICE",
      guid: "21d486a5-a3ca-4af7-8f41-e09be5b2f5c9",
      __typename: "ModifierGroup",
      modifiers: [
        {
          itemGuid: "e80d4813-c08e-42ac-8d69-11d4b12779c6",
          itemGroupGuid: null,
          selected: false,
          name: "Fries",
          price: 2,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "f441fbae-6258-4bce-9be7-f960b8191583",
          itemGroupGuid: null,
          selected: false,
          name: "Sub Hummus",
          price: 2,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "5768efd1-086a-4087-8109-1332d8ce2c97",
          itemGroupGuid: null,
          selected: false,
          name: "Sub Black Beans",
          price: 2,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "9f0410b9-da21-4f7e-8cb4-f431c4afdb26",
          itemGroupGuid: null,
          selected: false,
          name: "Sub Rice",
          price: 2,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "57a54c02-5458-4923-ad72-3484aecc766c",
          itemGroupGuid: null,
          selected: false,
          name: "Sub Taboule",
          price: 2,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "a4083379-633e-4366-bd6e-af4ff6956252",
          itemGroupGuid: null,
          selected: false,
          name: "Sub Garden Salad",
          price: 2,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "44998ec4-a1f6-4eaf-ab01-81cfcdb4150b",
          itemGroupGuid: null,
          selected: false,
          name: "Sub Onion rings",
          price: 2,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "fa8562f6-95d2-483d-927c-2be820f9cd42",
          itemGroupGuid: null,
          selected: false,
          name: "Sub Fried Mashroum",
          price: 2,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "53417cf2-b135-4378-9849-e92f9e79ad35",
          itemGroupGuid: null,
          selected: true,
          name: "Sub Potato Salad",
          price: 2,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
        {
          itemGuid: "e8f2c4e6-93d1-4688-ab3c-58ac52ca2a74",
          itemGroupGuid: null,
          selected: false,
          name: "Sub Chop Chop",
          price: 0,
          allowsDuplicates: false,
          outOfStock: false,
          isDefault: false,
          __typename: "Modifier",
          modifierGroups: [],
        },
      ],
    },
  ];

  const [quant, setQuant] = useState(1);
  const [orderedQuant, setOrderedQuant] = useState(0);

  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  const resetQuant = () => {
    setQuant(0);
    setOrderedQuant(0);
  };

  return (
    <Box>
      {modifierGroups.map((group) => (
        <Box key={group.guid} sx={{ p: 2 }}>
          <Typography sx={{ p: 2 }} variant="h4" component="h1" gutterBottom>
            {group.name}
          </Typography>

          <ModifierGroupsItems
            onQuant={quant}
            onAdd={addQuant}
            onRemove={removeQuant}
            onSetOrderedQuant={setOrderedQuant}
            group={group.modifiers}
          />
        </Box>
      ))}
    </Box>
  );
}
