# class GraphNode

#     attr_reader :store

#     def initialize
#         @store = []
#     end

#     def push(el)
#         @store.push(el)
#     end

#     def pop
#         @store.pop
#     end

#     def peek
#         @store[-1]
#     end

#     def empty?
#        @store.length == 0 
#     end

# end

#   def bfs(target_node_value) #we're thinking of bfs like a queue FIFO
#     # return self if self.value == target_node_value

#     # let's make our queue
#     # this is an iterative implementation

#     queue = [self] 
#         while !queue.empty?
#             current_node = queue.shift
#             #  return nil if current_node.value == nil
#             return current_node if current_node.value == target_node_value 

#             current_node.children.each do |current_node_child|
#                 queue << current_node_child
#             end
#         end
#         nil    
#     end



# this is the solution and im going to work backwards
require 'set'

class GraphNode
  attr_accessor :val, :neighbors

  def initialize(val)
    self.val = val
    self.neighbors = []
  end

  def add_neighbor(node)
    self.neighbors << node
  end
end

def bfs(starting_node, target_value)
  queue = [starting_node]
  visited = Set.new()

  until queue.empty?
    node = queue.shift
    unless visited.include?(node)
      return node.val if node.val == target_value
      visited.add(node)
      queue += node.neighbors
    end
  end
  
  return nil
end