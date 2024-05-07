import { Task } from "payload/generated-types"
import { CollectionConfig, FieldHook } from "payload/types"

const populateUsers : FieldHook<Task> = async ({ req, operation, value }) => {
  const {payload} = req
  if ((operation === 'create' || operation === 'update') && !value) {
    return req.user.email
  }
  if(value) {
    const user = await payload.findByID({
      collection: 'users',
      id: value
    })
    console.log('%csrc/collections/Tasks.ts:14 user', 'color: #26bfa5;', user);
    return user.id
    }
}

const Tasks: CollectionConfig = {
  slug: 'tasks',
  auth: false,
  admin: {
    useAsTitle: 'name',
    defaultColumns: [
      'name', 'description', 'status', 'user'
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text'
    },
    {
      name: 'description',
      type: 'richText'
    },
    {
      name: 'status',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      unique: false,
      hooks: {
        beforeChange:[populateUsers],
      },
    },
    {
      name: 'createdOn',
      label: 'Created On',
      type: 'date',
      admin: {
        readOnly: true
      }
    },
    {
      name: 'lastModified',
      label: 'Last Modified',
      type: 'date',
      admin: {
        readOnly: true
      }
    },
  ]

}

export default Tasks