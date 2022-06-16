console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java 148 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "105"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00607"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#607"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00607] The class StateDirectory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00607"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#607"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00607] The class StateDirectoryProcessFile contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00607"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#607"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00607] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectoryProcessFile.StateDirectoryProcessFile@POLYN254058 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00607"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#607"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00607] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN255268 the MagicNumber/String  'base state directory [%s] doesn't exist and couldn't be created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN255268 the MagicNumber/String  'state directory [%s] doesn't exist and couldn't be created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN255268 the MagicNumber/String  'state directory [%s] can't be created as there is an existing file with the same name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN255268 the MagicNumber/String  'java.io.tmpdir' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN255268 the MagicNumber/String  'Using an OS temp directory in the state.dir property can cause failures with writing' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN255268 the MagicNumber/String  ' the checkpoint file due to the fact that this directory can be cleared by the OS.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN255268 the MagicNumber/String  ' Resolved state.dir: [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN255268 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method configurePermissions arguments File  file"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00001] The argument file is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN257353 the MagicNumber/String  'posix' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN257353 the MagicNumber/String  'rwxr-x---' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN257353 the MagicNumber/String  'Error changing permissions for the directory {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN257353 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN257353 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN257353 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN257353 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN257353 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN257353 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN257353 the MagicNumber/String  'Failed to change permissions for the directory {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lockStateDirectory@POLYN258626 the MagicNumber/String  'Unable to lock the state directory due to unexpected exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lockStateDirectory@POLYN258626 the MagicNumber/String  'Failed to lock the state directory [%s] during startup' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lockStateDirectory@POLYN258626 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN259456 the MagicNumber/String  'Unable to obtain lock as state directory is already locked by another process' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN259456 the MagicNumber/String  'Unable to initialize state, this can happen if multiple instances of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN259456 the MagicNumber/String  'Kafka Streams are running in the same state directory ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN259456 the MagicNumber/String  '(current state directory is [%s]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN259456 the MagicNumber/String  'Reading UUID from process file: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN259456 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN259456 the MagicNumber/String  'Failed to read json process file' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN259456 the MagicNumber/String  'No process id found on disk, got fresh process id {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN259456 the MagicNumber/String  'Unable to read/write process file due to unexpected exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method getOrCreateDirectoryForTask arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00001] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN261508 the MagicNumber/String  'Parent [%s] of task directory [%s] doesn't exist and couldn't be created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN261508 the MagicNumber/String  'task directory [%s] doesn't exist and couldn't be created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN261508 the MagicNumber/String  'state directory [%s] can't be created as there is an existing file with the same name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method getTaskDirectoryParentName arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00001] The argument taskId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getTaskDirectoryParentName@POLYN262896 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getTaskDirectoryParentName@POLYN262896 the MagicNumber/String  'Tried to lookup taskId with named topology, but StateDirectory thinks hasNamedTopologies = false' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method getNamedTopologyDirName arguments String  topologyName"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getNamedTopologyDirName@POLYN263440 the MagicNumber/String  '__' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getNamedTopologyDirName@POLYN263440 the MagicNumber/String  '__' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method checkpointFileFor arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method directoryForTaskIsEmpty arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method taskDirIsEmpty arguments File  taskDir"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00001] The argument taskDir is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN264147 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN264147 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN264147 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN264147 the MagicNumber/String  'Error encountered deleting lock file in {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN264147 the MagicNumber/String  'TaskDir {} was not empty, found {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN264147 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.globalStateDir@POLYN265319 the MagicNumber/String  'global' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.globalStateDir@POLYN265319 the MagicNumber/String  'global state directory [%s] doesn't exist and couldn't be created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.globalStateDir@POLYN265319 the MagicNumber/String  'global state directory [%s] can't be created as there is an existing file with the same name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.logPrefix@POLYN266139 the MagicNumber/String  'stream-thread [%s]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00001] Lock statement on synchronized method lock"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method lock arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN266438 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN266438 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN266438 the MagicNumber/String  '{} Found cached state dir lock for task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN266438 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN266438 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN266438 the MagicNumber/String  'Tried to lock task directory for {} but the state directory does not exist' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN266438 the MagicNumber/String  'The state directory has been deleted' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN266438 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00001] Lock statement on synchronized method unlock"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method unlock arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267643 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267643 the MagicNumber/String  '{} Released state dir lock for task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN268165 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN268165 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN268165 the MagicNumber/String  'Unexpected exception while unlocking the state dir' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN268165 the MagicNumber/String  'Failed to release the lock on the state directory [%s]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN268165 the MagicNumber/String  'Some task directories still locked while closing state, this indicates unclean shutdown: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00001] Lock statement on synchronized method clean"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clean@POLYN268997 the MagicNumber/String  '%s Failed to delete global state directory of %s due to an unexpected exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clean@POLYN268997 the MagicNumber/String  '%s Failed to delete state store directory of %s for it is not empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clean@POLYN268997 the MagicNumber/String  '%s Failed to delete state store directory of %s due to an unexpected exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00001] Lock statement on synchronized method cleanRemovedTasks"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method cleanRemovedTasks arguments long  cleanupDelayMs"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN270648 the MagicNumber/String  'Should have swallowed exception.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method cleanRemovedTasksCalledByCleanerThread arguments long  cleanupDelayMs"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270943 the MagicNumber/String  '{} Deleting obsolete state directory {} for task {} as {}ms has elapsed (cleanup delay is {}ms).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270943 the MagicNumber/String  '%s Swallowed the following exception during deletion of obsolete state directory %s for task %s:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270943 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method maybeCleanEmptyNamedTopologyDirs arguments boolean  logExceptionAsWarn"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN272709 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN272709 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN272709 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN272709 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN272709 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN272709 the MagicNumber/String  '%sSwallowed the following exception during deletion of named topology directory %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN272709 the MagicNumber/String  '%s Failed to delete named topology directory %s with exception:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN272709 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method clearLocalStateForNamedTopology arguments String  topologyName"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN274493 the MagicNumber/String  'Tried to clear out the local state for NamedTopology {} but none was found' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN274493 the MagicNumber/String  'Hit an unexpected error while clearing local state for topology ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN274493 the MagicNumber/String  'Unable to delete state for the named topology ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN274493 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN274493 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN275439 the MagicNumber/String  'Found some still-locked task directories when user requested to cleaning up the state, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN275439 the MagicNumber/String  'since Streams is not running any more these will be ignored to complete the cleanup' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN275439 the MagicNumber/String  '{} Deleting task directory {} for {} as user calling cleanup.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN275439 the MagicNumber/String  '{} Task {} in state directory {} was still locked by {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN275439 the MagicNumber/String  '%s Failed to delete task directory %s for %s with exception:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN275439 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN275439 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN275439 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN275439 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listNonEmptyTaskDirectories@POLYN277473 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method listTaskDirectories arguments FileFilter  filter"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listTaskDirectories@POLYN278325 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listTaskDirectories@POLYN278325 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listTaskDirectories@POLYN278325 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listNamedTopologyDirs@POLYN279867 the MagicNumber/String  '__' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listNamedTopologyDirs@POLYN279867 the MagicNumber/String  '__' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listNamedTopologyDirs@POLYN279867 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method parseNamedTopologyFromDirectory arguments String  dirName"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00001] The argument dirName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.parseNamedTopologyFromDirectory@POLYN280345 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.parseNamedTopologyFromDirectory@POLYN280345 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method tryLock arguments FileChannel  channel"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00001] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.tryLock@POLYN280563 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00001] The class TaskDirectory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00001] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.TaskDirectory.equals@POLYN281339 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.TaskDirectory.equals@POLYN281339 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.TaskDirectory.equals@POLYN281339 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00001] Public method cleanRemovedTasks is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
