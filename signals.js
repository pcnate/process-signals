
// source: https://www.bogotobogo.com/Linux/linux_process_and_signals.php#signals
const signals = {
  'SIGHUP':   { signal: 'SIGHUP'    , code:  1, description: 'Hangup'                                       , originalDescription: 'Hangup( POSIX )'                                       , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGINT':   { signal: 'SIGINT'    , code:  2, description: 'Terminal_interrupt'                           , originalDescription: 'Terminal interrupt( ANSI )'                            , standards: [{ name: 'ANSI' }]                               , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGQUIT':  { signal: 'SIGQUIT'   , code:  3, description: 'Terminal_quit'                                , originalDescription: 'Terminal quit( POSIX )'                                , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGILL':   { signal: 'SIGILL'    , code:  4, description: 'Illegal_instruction'                          , originalDescription: 'Illegal instruction( ANSI )'                           , standards: [{ name: 'ANSI' }]                               , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGTRAP':  { signal: 'SIGTRAP'   , code:  5, description: 'Trace_trap'                                   , originalDescription: 'Trace trap( POSIX )'                                   , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGIOT':   { signal: 'SIGIOT'    , code:  6, description: 'IOT_Trap'                                     , originalDescription: 'IOT Trap(4.2 BSD )'                                    , standards: [{ name: 'BSD', version: 4.2 }]                  , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGBUS':   { signal: 'SIGBUS'    , code:  7, description: 'BUS_error'                                    , originalDescription: 'BUS error(4.2 BSD )'                                   , standards: [{ name: 'BSD', version: 4.2 }]                  , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGFPE':   { signal: 'SIGFPE'    , code:  8, description: 'Floating_point_exception'                     , originalDescription: 'Floating point exception( ANSI )'                      , standards: [{ name: 'ANSI' }]                               , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGKILL':  { signal: 'SIGKILL'   , code:  9, description: 'Kill'                                         , originalDescription: 'Kill( can\'t be caught or ignored) (POSIX)'            , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !1 },
  'SIGUSR1':  { signal: 'SIGUSR1'   , code: 10, description: 'User_defined_signal_1'                        , originalDescription: 'User defined signal 1( POSIX )'                        , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGSEGV':  { signal: 'SIGSEGV'   , code: 11, description: 'Invalid_memory_segment_access'                , originalDescription: 'Invalid memory segment access( ANSI )'                 , standards: [{ name: 'ANSI' }]                               , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGUSR2':  { signal: 'SIGUSR2'   , code: 12, description: 'User_defined_signal_2'                        , originalDescription: 'User defined signal 2( POSIX )'                        , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGPIPE':  { signal: 'SIGPIPE'   , code: 13, description: 'Write_on_a_pipe_with_no_reader_Broken_pipe'   , originalDescription: 'Write on a pipe with no reader, Broken pipe( POSIX )'  , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGALRM':  { signal: 'SIGALRM'   , code: 14, description: 'Alarm_clock'                                  , originalDescription: 'Alarm clock( POSIX )'                                  , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGTERM':  { signal: 'SIGTERM'   , code: 15, description: 'Termination'                                  , originalDescription: 'Termination( ANSI )'                                   , standards: [{ name: 'ANSI' }]                               , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGSTKFLT':{ signal: 'SIGSTKFLT' , code: 16, description: 'Stack_fault'                                  , originalDescription: 'Stack fault'                                           , standards: []                                               , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGCHLD':  { signal: 'SIGCHLD'   , code: 17, description: 'Child_process_has_stopped_or_exited,'         , originalDescription: 'Child process has stopped or exited, changed( POSIX )' , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGCONTv': { signal: 'SIGCONTv'  , code: 18, description: 'Continue_executing_if_stopped'                , originalDescription: 'Continue executing, if stopped( POSIX )'               , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGSTOP':  { signal: 'SIGSTOP'   , code: 19, description: 'Stop_executing'                               , originalDescription: 'Stop executing( can\'t be caught or ignored) (POSIX)'  , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !1 },
  'SIGTSTP':  { signal: 'SIGTSTP'   , code: 20, description: 'Terminal_stop_signal'                         , originalDescription: 'Terminal stop signal ( POSIX )'                        , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGTTIN':  { signal: 'SIGTTIN'   , code: 21, description: 'Background_process_trying_to_read_from_TTY'   , originalDescription: 'Background process trying to read, from TTY( POSIX )'  , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGTTOU':  { signal: 'SIGTTOU'   , code: 22, description: 'Background_process_trying_to_write_to_TTY'    , originalDescription: 'Background process trying to write, to TTY( POSIX )'   , standards: [{ name: 'POSIX' }]                              , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGURG':   { signal: 'SIGURG'    , code: 23, description: 'Urgent_condition_on_socket'                   , originalDescription: 'Urgent condition on socket(4.2 BSD )'                  , standards: [{ name: 'BSD', version: 4.2 }]                  , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGXCPU':  { signal: 'SIGXCPU'   , code: 24, description: 'CPU_limit_exceeded'                           , originalDescription: 'CPU limit exceeded(4.2 BSD )'                          , standards: [{ name: 'BSD', version: 4.2 }]                  , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGXFSZ':  { signal: 'SIGXFSZ'   , code: 25, description: 'File_size_limit_exceeded'                     , originalDescription: 'File size limit exceeded(4.2 BSD )'                    , standards: [{ name: 'BSD', version: 4.2 }]                  , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGVTALRM':{ signal: 'SIGVTALRM' , code: 26, description: 'Virtual_alarm_clock'                          , originalDescription: 'Virtual alarm clock(4.2 BSD )'                         , standards: [{ name: 'BSD', version: 4.2 }]                  , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGPROF':  { signal: 'SIGPROF'   , code: 27, description: 'Profiling_alarm_clock'                        , originalDescription: 'Profiling alarm clock(4.2 BSD )'                       , standards: [{ name: 'BSD', version: 4.2 }]                  , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGWINCH': { signal: 'SIGWINCH'  , code: 28, description: 'Window_size_change'                           , originalDescription: 'Window size change(4.3 BSD, Sun )'                     , standards: [{ name: 'BSD', version: 4.3 }, { name: 'Sun' }] , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGIO':    { signal: 'SIGIO'     , code: 29, description: 'IO_now_possible'                              , originalDescription: 'I / O now possible(4.2 BSD )'                          , standards: [{ name: 'BSD', version: 4.2 }]                  , callbacks: [], allowCatchOrIgnore: !0 },
  'SIGPWR':   { signal: 'SIGPWR'    , code: 30, description: 'Power_failure_restart'                        , originalDescription: 'Power failure restart( System V )'                     , standards: [{ name: 'System V' }]                           , callbacks: [], allowCatchOrIgnore: !0 },
};

/**
 * 
 * @param {string} type property name
 * @returns 
 */
function mapByProperty( type ) {
  let result = {}
  Object.values( signals ).map( sigObj => typeof sigObj[ type ] !== 'undefined' ? result[ sigObj[ type ] ]= sigObj : !1 )
  return result
}

module.exports = {
  'SIGHUP'    : 'SIGHUP',
  'SIGINT'    : 'SIGINT',
  'SIGQUIT'   : 'SIGQUIT',
  'SIGILL'    : 'SIGILL',
  'SIGTRAP'   : 'SIGTRAP',
  'SIGIOT'    : 'SIGIOT',
  'SIGBUS'    : 'SIGBUS',
  'SIGFPE'    : 'SIGFPE',
  'SIGKILL'   : 'SIGKILL',
  'SIGUSR1'   : 'SIGUSR1',
  'SIGSEGV'   : 'SIGSEGV',
  'SIGUSR2'   : 'SIGUSR2',
  'SIGPIPE'   : 'SIGPIPE',
  'SIGALRM'   : 'SIGALRM',
  'SIGTERM'   : 'SIGTERM',
  'SIGSTKFLT' : 'SIGSTKFLT',
  'SIGCHLD'   : 'SIGCHLD',
  'SIGCONTv'  : 'SIGCONTv',
  'SIGSTOP'   : 'SIGSTOP',
  'SIGTSTP'   : 'SIGTSTP',
  'SIGTTIN'   : 'SIGTTIN',
  'SIGTTOU'   : 'SIGTTOU',
  'SIGURG'    : 'SIGURG',
  'SIGXCPU'   : 'SIGXCPU',
  'SIGXFSZ'   : 'SIGXFSZ',
  'SIGVTALRM' : 'SIGVTALRM',
  'SIGPROF'   : 'SIGPROF',
  'SIGWINCH'  : 'SIGWINCH',
  'SIGIO'     : 'SIGIO',
  'SIGPWR'    : 'SIGPWR',
}
module.exports.bySignal      = mapByProperty( 'signal'      )
module.exports.byCodes       = mapByProperty( 'code'        )
module.exports.byDescription = mapByProperty( 'description' )