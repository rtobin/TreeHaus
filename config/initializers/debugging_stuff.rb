# ActiveRecord::Validations::UniquenessValidator.class_eval do
#   def build_relation(klass, table, attribute, value) #:nodoc:
#     puts "************** #{attribute}"
#     puts "************** #{klass.columns_hash.keys.inspect}"
#     column = klass.columns_hash[attribute.to_s]
#     value = column.limit ? value.to_s.mb_chars[0, column.limit] : value.to_s if column.text?
#
#     if !options[:case_sensitive] && value && column.text?
#       # will use SQL LOWER function before comparison
#       relation = table[attribute].lower.eq(table.lower(value))
#     else
#       value    = klass.connection.case_sensitive_modifier(value)
#       relation = table[attribute].eq(value)
#     end
#
#     relation
#   end
# end
