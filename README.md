# build-react-native
Build React Native tutorial app

***

### to run Rails app

- `cd` into `buildRN` repo
- `bundle install` - make sure all the dependencies are installed properly, including Postgresql
- `rake db:create`
- `rake db:migrate`
- `rake db:seed` - this seeds the fixtures in the database
- `rails server`

****

## To add fixtures

- go to `buildRN/db/seeds.rb` and add another chapter (follow the examples)

****

## React components

- React components are located in `buildRN/app/assets/javascripts/components`

## Adding NPM packages

- it's possible, but tricky - this involves placing the file in the asset pipeline (more spec later)

## Testing the database

- Open a separate terminal window go to the root of the `Rails` app and type `rails c` or `rails console`
- You can then check the database - i.e., `Chapter.all`, `Chapter.first`, `Chapter.find(title: 'Hello World')`, etc.
