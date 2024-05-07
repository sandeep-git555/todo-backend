import { CollectionConfig } from "payload/types"

const Lists: CollectionConfig = {
  slug: 'lists',
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'name',
      type: 'text'
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: ['users'],
    }
  ]

}

export default Lists