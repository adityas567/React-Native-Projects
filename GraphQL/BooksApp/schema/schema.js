const graphql=require('graphql');

const {GraphQLSchema,GraphQLObjectType,GraphQLString} = graphql;

const BookType=new GraphQLObjectType({
    name: "Book",
    fields: ()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
})

const RootQuery=new GraphQLObjectType({
    name: "RootQuery",
    fields:{
        book:
        {
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args)
            {

            }
        }
    }
})

module.exports= new GraphQLSchema(
    {
        query:RootQuery
    }
)