class Api::RecordsController < ApplicationController
  def index
    if params[:recordable_type] == "user" && current_user.id == params[:recordable_id].to_i
      @type = "user"
      @records = User.find(params[:recordable_id]).records.last(params[:num_records].to_i).reverse
    elsif params[:recordable_type] == "project"
      project =  Project.find(params[:recordable_id].to_i)
      unless project.members.where(id: current_user.id).empty?
        @type = "project"
        @records = project.records.last(params[:num_records]).reverse
      end
    end
    render "api/records/index"
  end
end
