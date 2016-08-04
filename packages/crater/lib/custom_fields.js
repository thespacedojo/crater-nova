import React, { PropTypes, Component } from 'react';
import PublicationUtils from 'meteor/utilities:smart-publications';
import Tags from 'meteor/nova:forms-tags';
import Posts from "meteor/nova:posts";
import Users from "meteor/nova:users";
import Categories from "meteor/nova:categories";

const canInsert = user => Users.canDo(user, "posts.new");
const canEdit = Users.canEdit;
const canEditAll = user => Users.canDo(user, "posts.edit.all");

Posts.addField([
  {
    fieldName: 'podcastId',
    fieldSchema: {
      type: String,
      insertableIf: canEditAll,
      editableIf: canEditAll,
      publish: true,
      group: Posts.formGroups.admin
    }
  },
  {
    fieldName: 'categories',
    fieldSchema: {
      type: [String],
      control: Tags,
      optional: true,
      insertableIf: canInsert,
      editableIf: canEdit,
      autoform: {
        options: function () {
          var categories = Categories.find().map(function (category) {
            return {
              value: category._id,
              label: category.name
            };
          });
          return categories;
        }
      },
      publish: true,
      join: {
        joinAs: "categoriesArray",
        collection: () => Categories
      }
    }
  }
]);