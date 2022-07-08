console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java 224 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.StateDirectory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.StateDirectory" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "StateDirectory"
 , "c2" : "StateDirectory(StreamsConfig;Time;boolean;boolean)"
 , "c3" : "7"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configurePermissions(File)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "lockStateDirectory()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "UUID"
 , "c2" : "initializeProcessId()"
 , "c3" : "5"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "File"
 , "c2" : "getOrCreateDirectoryForTask(TaskId)"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "File"
 , "c2" : "getTaskDirectoryParentName(TaskId)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getNamedTopologyDirName(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "File"
 , "c2" : "checkpointFileFor(TaskId)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "directoryForTaskIsEmpty(TaskId)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "taskDirIsEmpty(File)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "File"
 , "c2" : "globalStateDir()"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "logPrefix()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "lock(TaskId)"
 , "c3" : "8"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "unlock(TaskId)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clean()"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "cleanRemovedTasks(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "cleanRemovedTasksCalledByCleanerThread(long)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "IOException"
 , "c2" : "maybeCleanEmptyNamedTopologyDirs(boolean)"
 , "c3" : "7"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clearLocalStateForNamedTopology(String)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "cleanStateAndTaskDirectoriesCalledByUser()"
 , "c3" : "5"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "List<TaskDirectory>"
 , "c2" : "listNonEmptyTaskDirectories()"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "List<TaskDirectory>"
 , "c2" : "listAllTaskDirectories()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<TaskDirectory>"
 , "c2" : "listTaskDirectories(FileFilter)"
 , "c3" : "7"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "List<File>"
 , "c2" : "listNamedTopologyDirs()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "parseNamedTopologyFromDirectory(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FileLock"
 , "c2" : "tryLock(FileChannel)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.svg" }

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
"data12a" : [
{ "ligne" :  "R0:org.apache.kafka.streams.processor.internals.StateDirectory.this" }
,
{ "ligne" :  "R1:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258306.cleanupDelayMs" }
,
{ "ligne" :  "R2:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255301.taskId" }
,
{ "ligne" :  "R3:org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258306 (R0 in line [00001],R1 in line [00001])" }
,
{ "ligne" : "S0:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258601" }
,
{ "ligne" : "S0:org.apache.kafka.common.utils.Utils.delete@POLYN441673" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258306 (R0 in line [00001],R1 in line [00001])" }
,
{ "ligne" : "S1:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258601" }
,
{ "ligne" : "S1:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258601" }
,
{ "ligne" : "S1:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255301 (R0 in line [00001],R2 in line [00001])" }
,
{ "ligne" : "S1:org.apache.kafka.common.header.Headers.remove" }
 ]
 } }
,
{ "sequence" : { "noseq" : "2" , "pas" : [
{ "ligne" : "S2:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 (R0 in line [00001])" }
,
{ "ligne" : "S2:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN249156 (R3 in line [00001])" }
,
{ "ligne" : "S2:org.apache.kafka.streams.processor.internals.StateDirectory.getTaskDirectoryParentName@POLYN250544" }
,
{ "ligne" : "S2:org.apache.kafka.streams.processor.TaskId.topologyName@POLYN166227" }
 ]
 } }
,
{ "sequence" : { "noseq" : "3" , "pas" : [
{ "ligne" : "S3:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258306 (R0 in line [00001],R1 in line [00001])" }
,
{ "ligne" : "S3:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258601" }
,
{ "ligne" : "S3:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258601" }
,
{ "ligne" : "S3:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255301 (R0 in line [00001],R2 in line [00001])" }
,
{ "ligne" : "S3:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255301 (R0 in line [00001],R2 in line [00001])" }
,
{ "ligne" : "S3:org.apache.kafka.common.header.Headers.remove" }
 ]
 } }
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE833"
 , "c3" : "Potential deadlock between at least two ressources"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "58"
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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "10"
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
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "4"
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
 , "c3" : "QC-JAV000010[00607] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectoryProcessFile.StateDirectoryProcessFile@POLYN241706 the MagicNumber/String  null should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN242916 the MagicNumber/String  'base state directory [%s] doesn't exist and couldn't be created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN242916 the MagicNumber/String  'state directory [%s] doesn't exist and couldn't be created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN242916 the MagicNumber/String  'state directory [%s] can't be created as there is an existing file with the same name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN242916 the MagicNumber/String  'java.io.tmpdir' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN242916 the MagicNumber/String  'Using an OS temp directory in the state.dir property can cause failures with writing' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN242916 the MagicNumber/String  ' the checkpoint file due to the fact that this directory can be cleared by the OS.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN242916 the MagicNumber/String  ' Resolved state.dir: [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.StateDirectory@POLYN242916 the MagicNumber/String  ']' should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN245001 the MagicNumber/String  'posix' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN245001 the MagicNumber/String  'rwxr-x---' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN245001 the MagicNumber/String  'Error changing permissions for the directory {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN245001 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN245001 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN245001 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN245001 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN245001 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN245001 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.configurePermissions@POLYN245001 the MagicNumber/String  'Failed to change permissions for the directory {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lockStateDirectory@POLYN246274 the MagicNumber/String  'Unable to lock the state directory due to unexpected exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lockStateDirectory@POLYN246274 the MagicNumber/String  'Failed to lock the state directory [%s] during startup' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lockStateDirectory@POLYN246274 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String  'Unable to obtain lock as state directory is already locked by another process' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String  'Unable to initialize state, this can happen if multiple instances of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String  'Kafka Streams are running in the same state directory ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String  '(current state directory is [%s]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String  'Reading UUID from process file: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String  'Failed to read json process file' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String  'No process id found on disk, got fresh process id {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String  'Unable to read/write process file due to unexpected exception' should be converted to const"
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
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00001] For method getOrCreateDirectoryForTask list of called methods Object monObjet|java.io.File getTaskDirectoryParentNameN249261"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN249156 the MagicNumber/String  'Parent [%s] of task directory [%s] doesn't exist and couldn't be created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN249156 the MagicNumber/String  'task directory [%s] doesn't exist and couldn't be created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN249156 the MagicNumber/String  'state directory [%s] can't be created as there is an existing file with the same name' should be converted to const"
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
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00001] For method getTaskDirectoryParentName list of called methods Object monObjet|String taskId_topologyNameN250649"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getTaskDirectoryParentName@POLYN250544 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getTaskDirectoryParentName@POLYN250544 the MagicNumber/String  'Tried to lookup taskId with named topology, but StateDirectory thinks hasNamedTopologies = false' should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getNamedTopologyDirName@POLYN251088 the MagicNumber/String  '__' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.getNamedTopologyDirName@POLYN251088 the MagicNumber/String  '__' should be converted to const"
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
 , "c3" : "QC-JAV000007[00001] For method directoryForTaskIsEmpty list of called methods Object monObjet|java.io.File getOrCreateDirectoryForTaskN251667"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795 the MagicNumber/String  'Error encountered deleting lock file in {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795 the MagicNumber/String  'TaskDir {} was not empty, found {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.globalStateDir@POLYN252977 the MagicNumber/String  'global' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.globalStateDir@POLYN252977 the MagicNumber/String  'global state directory [%s] doesn't exist and couldn't be created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.globalStateDir@POLYN252977 the MagicNumber/String  'global state directory [%s] can't be created as there is an existing file with the same name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.logPrefix@POLYN253797 the MagicNumber/String  'stream-thread [%s]' should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String  '{} Found cached state dir lock for task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String  'Tried to lock task directory for {} but the state directory does not exist' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String  'The state directory has been deleted' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String  true should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255301 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255301 the MagicNumber/String  '{} Released state dir lock for task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN255823 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN255823 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN255823 the MagicNumber/String  'Unexpected exception while unlocking the state dir' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN255823 the MagicNumber/String  'Failed to release the lock on the state directory [%s]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN255823 the MagicNumber/String  'Some task directories still locked while closing state, this indicates unclean shutdown: {}' should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clean@POLYN256655 the MagicNumber/String  '%s Failed to delete global state directory of %s due to an unexpected exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clean@POLYN256655 the MagicNumber/String  '%s Failed to delete state store directory of %s for it is not empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clean@POLYN256655 the MagicNumber/String  '%s Failed to delete state store directory of %s due to an unexpected exception' should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258306 the MagicNumber/String  'Should have swallowed exception.' should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258601 the MagicNumber/String  '{} Deleting obsolete state directory {} for task {} as {}ms has elapsed (cleanup delay is {}ms).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258601 the MagicNumber/String  '%s Swallowed the following exception during deletion of obsolete state directory %s for task %s:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258601 the MagicNumber/String  true should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String  '%sSwallowed the following exception during deletion of named topology directory %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String  '%s Failed to delete named topology directory %s with exception:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String  null should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN262161 the MagicNumber/String  'Tried to clear out the local state for NamedTopology {} but none was found' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN262161 the MagicNumber/String  'Hit an unexpected error while clearing local state for topology ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN262161 the MagicNumber/String  'Unable to delete state for the named topology ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN262161 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN262161 the MagicNumber/String  1 should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String  'Found some still-locked task directories when user requested to cleaning up the state, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String  'since Streams is not running any more these will be ignored to complete the cleanup' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String  '{} Deleting task directory {} for {} as user calling cleanup.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String  '{} Task {} in state directory {} was still locked by {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String  '%s Failed to delete task directory %s for %s with exception:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listNonEmptyTaskDirectories@POLYN265141 the MagicNumber/String  false should be converted to const"
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
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00001] For method listTaskDirectories list of called methods Object monObjet|String parseNamedTopologyFromDirectoryN266457"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listTaskDirectories@POLYN266013 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listTaskDirectories@POLYN266013 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listTaskDirectories@POLYN266013 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listNamedTopologyDirs@POLYN267575 the MagicNumber/String  '__' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listNamedTopologyDirs@POLYN267575 the MagicNumber/String  '__' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.listNamedTopologyDirs@POLYN267575 the MagicNumber/String  null should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.parseNamedTopologyFromDirectory@POLYN268063 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.parseNamedTopologyFromDirectory@POLYN268063 the MagicNumber/String  2 should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.tryLock@POLYN268281 the MagicNumber/String  null should be converted to const"
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
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.TaskDirectory.equals@POLYN269057 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.TaskDirectory.equals@POLYN269057 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.streams.processor.internals.StateDirectory.TaskDirectory.equals@POLYN269057 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00001] Public method cleanRemovedTasks is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : org.apache.kafka.streams.processor.internals.StateDirectory.this"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258306.cleanupDelayMs"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R2 : org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255301.taskId"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R3 : org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258601"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255301"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StateDirectory.clean@POLYN256655"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN262161"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN255823"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258601 the MagicNumber/String '%s Swallowed the following exception during deletion of obsolete state directory %s for task %s:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258601 the MagicNumber/String '{} Deleting obsolete state directory {} for task {} as {}ms has elapsed -cleanup delay is {}ms-.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258601 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String '%s Failed to delete named topology directory %s with exception:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String '%sSwallowed the following exception during deletion of named topology directory %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260367 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255301 the MagicNumber/String '{} Released state dir lock for task {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255301 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String 'The state directory has been deleted' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String 'Tried to lock task directory for {} but the state directory does not exist' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String '{} Found cached state dir lock for task {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254096 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.clean@POLYN256655 the MagicNumber/String '%s Failed to delete global state directory of %s due to an unexpected exception' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.clean@POLYN256655 the MagicNumber/String '%s Failed to delete state store directory of %s due to an unexpected exception' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.clean@POLYN256655 the MagicNumber/String '%s Failed to delete state store directory of %s for it is not empty' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String '%s Failed to delete task directory %s for %s with exception:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String 'Found some still-locked task directories when user requested to cleaning up the state, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String 'since Streams is not running any more these will be ignored to complete the cleanup' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String '{} Deleting task directory {} for {} as user calling cleanup.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String '{} Task {} in state directory {} was still locked by {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263107 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795 the MagicNumber/String 'Error encountered deleting lock file in {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795 the MagicNumber/String 'TaskDir {} was not empty, found {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.taskDirIsEmpty@POLYN251795 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN262161 the MagicNumber/String 'Hit an unexpected error while clearing local state for topology ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN262161 the MagicNumber/String 'Tried to clear out the local state for NamedTopology {} but none was found' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN262161 the MagicNumber/String 'Unable to delete state for the named topology ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN262161 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.clearLocalStateForNamedTopology@POLYN262161 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN255823 the MagicNumber/String 'Failed to release the lock on the state directory [%s]' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN255823 the MagicNumber/String 'Some task directories still locked while closing state, this indicates unclean shutdown: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN255823 the MagicNumber/String 'Unexpected exception while unlocking the state dir' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN255823 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.close@POLYN255823 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String '-current state directory is [%s]' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String 'Failed to read json process file' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String 'Kafka Streams are running in the same state directory ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String 'No process id found on disk, got fresh process id {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String 'Reading UUID from process file: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String 'Unable to initialize state, this can happen if multiple instances of ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String 'Unable to obtain lock as state directory is already locked by another process' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String 'Unable to read/write process file due to unexpected exception' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StateDirectory.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00001] In the recursive method org.apache.kafka.streams.processor.internals.StateDirectory.initializeProcessId@POLYN247104 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
