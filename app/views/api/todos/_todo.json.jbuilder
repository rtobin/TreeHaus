json.(todo, :id, :title, :body, :author_id, :done, :created_at, :updated_at)
json.steps.each do |step|
    json.set! step.id do
      json.partial! 'api/steps/step', step: step
    end
  end
end
