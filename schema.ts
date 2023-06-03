export default {
  openapi: '3.0.0',
  info: {
    title: 'Ricky And Morty API',
    description: 'Ricky And Morty API',
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
    version: '1.0.0',
  },
  servers: [
    {
      url: 'https://rickandmortyapi.com/api',
      description: 'Main server',
    },
  ],
  tags: [
    {
      name: 'characters',
      description: 'All About Characters',
    },
    {
      name: 'locations',
      description: 'All About Locations',
    },
  ],
  paths: {
    '/character/{id}': {
      get: {
        tags: ['characters'],
        summary: 'get current character',
        description: 'Get Current Charcater',
        operationId: 'getSingleCharacter',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            style: 'simple',
            explode: false,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'good',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CharactersList',
                },
              },
            },
          },
          '400': {
            description: 'bad input parameter',
          },
        },
      },
    },
    '/character': {
      get: {
        tags: ['characters'],
        summary: 'get all characters',
        description: 'Get All Characters',
        operationId: 'getAllCharacters',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'good',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CharactersList',
                },
              },
            },
          },
          '400': {
            description: 'bad input parameter',
          },
        },
      },
    },
  },
  components: {
    schemas: {
      CharactersList: {
        required: ['info'],
        type: 'object',
        properties: {
          info: {
            $ref: '#/components/schemas/Info',
          },
          results: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Character',
            },
          },
        },
      },
      Info: {
        required: ['count', 'pages'],
        type: 'object',
        properties: {
          count: {
            type: 'integer',
            example: 3,
          },
          pages: {
            type: 'integer',
            example: 4,
          },
          next: {
            type: 'string',
            nullable: true,
            example: 'https://rickandmortyapi.com/api/character/?page=2',
          },
          prev: {
            type: 'string',
            nullable: true,
            example: 'https://rickandmortyapi.com/api/character/?page=2',
          },
        },
      },
      Location: {
        required: ['name', 'url'],
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          url: {
            type: 'string',
          },
        },
      },
      Character: {
        required: ['gender', 'id', 'name', 'origin', 'species', 'status'],
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          name: {
            type: 'string',
          },
          status: {
            type: 'string',
          },
          species: {
            type: 'string',
          },
          type: {
            type: 'string',
          },
          gender: {
            type: 'string',
          },
          origin: {
            $ref: '#/components/schemas/Location',
          },
          location: {
            $ref: '#/components/schemas/Location',
          },
          image: {
            type: 'string',
          },
          url: {
            type: 'string',
          },
          created: {
            type: 'string',
          },
          episode: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  },
} as const;
