# last in, first out 
class Stack

    attr_reader :stack_array

    def initialize
        @stack_array = []
    end

    def push(el)
       
        @stack_array.push(el)
        el

    end

    def pop
        @stack_array.pop
    end

    def peek
        @stack_array[-1]
        # @stack_array.last
    end
end