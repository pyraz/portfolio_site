require 'rubygems'
require 'sinatra'
require 'haml'

# Helpers
require './lib/render_partial'
require 'sinatra/content_for'

# Set Sinatra variables
set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :views, 'views'
set :public_folder, 'public'
set :haml, {:format => :html5} # default Haml format is :xhtml

# Application routes
get '/' do
  haml :index, :layout => :'layouts/application'
end

get '/ruby/:page' do
  template = "ruby/#{params[:page]}"
  haml template.to_sym, :layout => :'layouts/application'
end

get '/data_mining/:page' do
  template = "data_mining/#{params[:page]}"
  haml template.to_sym, :layout => :'layouts/data_mining'
end

get '/:page' do
  haml params[:page].to_sym, :layout => :'layouts/application'
end