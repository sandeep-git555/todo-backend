import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'firstName',
      type: 'text'
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'isSuperUser',
      type: 'checkbox',
      defaultValue: false
    },
    {
      name: 'isVisitor',
      type: 'checkbox',
    },
    {
      name: 'tasks',
      type: 'array',
      index: true,
      fields: [
        {
          name: 'taskName',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'status',
          type: 'checkbox',
        },
        {
          name: 'priority',
          type: 'checkbox',
        },
      ],
    },
  ],
}

export default Users
