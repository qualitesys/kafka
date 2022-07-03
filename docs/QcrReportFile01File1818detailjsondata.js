console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java 75 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "StateUpdater"
 , "c2" : "org.apache.kafka.streams.processor.internals.DefaultStateUpdater"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.DefaultStateUpdater" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DefaultStateUpdater"
 , "c2" : "DefaultStateUpdater(ChangelogReader;Consumer<Set<TopicPartition>>;Time)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "add(Task)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "verifyStateFor(Task)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "remove(TaskId)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Set<StreamTask>"
 , "c2" : "drainRestoredActiveTasks(Duration)"
 , "c3" : "3"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "Set<Task>"
 , "c2" : "drainRemovedTasks()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "List<ExceptionAndTasks>"
 , "c2" : "drainExceptionsAndFailedTasks()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Set<StandbyTask>"
 , "c2" : "getUpdatingStandbyTasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<Task>"
 , "c2" : "getUpdatingTasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<StreamTask>"
 , "c2" : "getRestoredActiveTasks()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "List<ExceptionAndTasks>"
 , "c2" : "getExceptionsAndFailedTasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<Task>"
 , "c2" : "getRemovedTasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "shutdown(Duration)"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE392"
 , "c3" : "Failure to report error in status code"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "41"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "15"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00036] The class DefaultStateUpdater contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.StateUpdaterThread@POLYN228012 the MagicNumber/String  '%s ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00083] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00084] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.run@POLYN229485 the MagicNumber/String  'State updater thread started' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.run@POLYN229485 the MagicNumber/String  'State updater thread shutdown' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00106] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method handleRuntimeException arguments RuntimeException  runtimeException"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.handleRuntimeException@POLYN231835 the MagicNumber/String  'An unexpected error occurred within the state updater thread: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.handleRuntimeException@POLYN231835 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method handleTaskCorruptedException arguments TaskCorruptedException  taskCorruptedException"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#144"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00144] The argument taskCorruptedException is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00149] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.handleTaskCorruptedException@POLYN232380 the MagicNumber/String  'Encountered task corrupted exception: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.handleTaskCorruptedException@POLYN232380 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.handleTaskCorruptedException@POLYN232380 the MagicNumber/String  'Task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.handleTaskCorruptedException@POLYN232380 the MagicNumber/String  ' is corrupted but is not updating. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00158] For method handleStreamsException arguments StreamsException  streamsException"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#158"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00158] The argument streamsException is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.handleStreamsException@POLYN233350 the MagicNumber/String  'Encountered streams exception: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method handleStreamsExceptionWithTask arguments StreamsException  streamsException"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#169"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00169] The argument streamsException is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.handleStreamsExceptionWithTask@POLYN233905 the MagicNumber/String  'Task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.handleStreamsExceptionWithTask@POLYN233905 the MagicNumber/String  ' failed but is not updating. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00180] For method handleStreamsExceptionWithoutTask arguments StreamsException  streamsException"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#219"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00219] For method addTask arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#219"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00219] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.addTask@POLYN236263 the MagicNumber/String  'Stateless active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.addTask@POLYN236263 the MagicNumber/String  ' was added to the restored tasks of the state updater' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.addTask@POLYN236263 the MagicNumber/String  'Stateful active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.addTask@POLYN236263 the MagicNumber/String  ' was added to the updating tasks of the state updater' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.addTask@POLYN236263 the MagicNumber/String  'Standby task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.addTask@POLYN236263 the MagicNumber/String  ' was added to the updating tasks of the state updater' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.addTask@POLYN236263 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#237"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00237] For method removeTask arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.removeTask@POLYN237334 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.removeTask@POLYN237334 the MagicNumber/String  'Active' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.removeTask@POLYN237334 the MagicNumber/String  'Standby' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.removeTask@POLYN237334 the MagicNumber/String  ' task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.removeTask@POLYN237334 the MagicNumber/String  ' was removed from the updating tasks and added to the removed tasks.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.removeTask@POLYN237334 the MagicNumber/String  'Task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.removeTask@POLYN237334 the MagicNumber/String  ' was not removed since it is not updating.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#250"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00250] For method isStateless arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#250"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00250] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#254"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00254] For method maybeCompleteRestoration arguments StreamTask  task|Set&lt;TopicPartition &gt;  restoredChangelogs"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#254"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00254] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#255"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00255] The argument restoredChangelogs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.maybeCompleteRestoration@POLYN238478 the MagicNumber/String  'Stateful active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.maybeCompleteRestoration@POLYN238478 the MagicNumber/String  ' completed restoration' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#268"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00268] For method addTaskToRestoredTasks arguments StreamTask  task"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#268"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00268] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.addTaskToRestoredTasks@POLYN239265 the MagicNumber/String  'Active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.StateUpdaterThread.addTaskToRestoredTasks@POLYN239265 the MagicNumber/String  ' was added to the restored tasks' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#304"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00304] For method add arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.add@POLYN241234 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.add@POLYN241234 the MagicNumber/String  'state-updater' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.add@POLYN241234 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#322"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00322] For method verifyStateFor arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#322"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00322] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.verifyStateFor@POLYN242025 the MagicNumber/String  'Active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.verifyStateFor@POLYN242025 the MagicNumber/String  ' is not in state RESTORING. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.verifyStateFor@POLYN242025 the MagicNumber/String  'Standby task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.verifyStateFor@POLYN242025 the MagicNumber/String  ' is not in state RUNNING. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#332"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00332] For method remove arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#343"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00343] For method drainRestoredActiveTasks arguments Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#343"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00343] The argument timeout is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00365] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#411"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00411] For method shutdown arguments Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#411"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00411] The argument timeout is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00420] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.shutdown@POLYN246359 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.shutdown@POLYN246359 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.shutdown@POLYN246359 the MagicNumber/String  'State updater thread did not shutdown within the timeout' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00419"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/DefaultStateUpdater.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method org.apache.kafka.streams.processor.internals.DefaultStateUpdater.shutdown@POLYN246359 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
