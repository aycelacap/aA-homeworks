class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    while !@game_over
      take_turn
        
    end

    if @game_over == true
        game_over_message
        reset_game
        end
    
  end

  def take_turn
   if game_over == false
      show_sequence
      require_sequence
      round_success_message
      @sequence_length += 1
    end

  end

  def show_sequence
    add_random_color
    @seq.each do |c|
      p c
    end
  end

  def require_sequence
    if @seq.length != sequence_length
      @game_over = true 
    end
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    "you win yeet yeet"
  end

  def game_over_message
    "no win today"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
