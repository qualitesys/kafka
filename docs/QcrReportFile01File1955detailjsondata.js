console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java 67 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "StandbyTaskAssignor"
 , "c2" : "org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#27"
 , "c1" : "boolean"
 , "c2" : "assign(Map<UUID,ClientState>;Set<TaskId>;Set<TaskId>;AssignorConfiguration.AssignmentConfigs)"
 , "c3" : "5"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#81"
 , "c1" : "void"
 , "c2" : "assignPendingStandbyTasksToLeastLoadedClients(Map<UUID,ClientState>;int;ConstrainedPrioritySet;Map<TaskId,Integer>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#103"
 , "c1" : "boolean"
 , "c2" : "isAllowedTaskMovement(ClientState;ClientState)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00117"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#117"
 , "c1" : "void"
 , "c2" : "fillClientsTagStatistics(Map<UUID,ClientState>;Map<TagEntry,Set<UUID>>;Map<String,Set<String>>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00132"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#132"
 , "c1" : "void"
 , "c2" : "assignStandbyTasksToClientsWithDifferentTags(int;ConstrainedPrioritySet;TaskId;UUID;Set<String>;Map<UUID,ClientState>;Map<TaskId,Integer>;Map<String,Set<String>>;Map<TagEntry,Set<UUID>>;Map<TaskId,UUID>)"
 , "c3" : "6"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00201"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#201"
 , "c1" : "boolean"
 , "c2" : "isClientUsedOnAnyOfTheTagEntries(UUID;Map<TagEntry,Set<UUID>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00206"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#206"
 , "c1" : "void"
 , "c2" : "updateClientsOnAlreadyUsedTagEntries(UUID;int;Set<String>;Map<UUID,ClientState>;Map<TagEntry,Set<UUID>>;Map<String,Set<String>>;Map<TagEntry,Set<UUID>>)"
 , "c3" : "5"
 , "c4" : "10"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.svg" }

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
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "20"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "15"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "20"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method assign arguments Map&lt;UUID ,ClientState &gt;  clients|Set&lt;TaskId &gt;  allTaskIds|Set&lt;TaskId &gt;  statefulTaskIds|AssignorConfiguration.AssignmentConfigs  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument clients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#30"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00030] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00049] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00050] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00051] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00050] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00051] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assign@POLYN183839 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method assignPendingStandbyTasksToLeastLoadedClients arguments Map&lt;UUID ,ClientState &gt;  clients|int  numStandbyReplicas|ConstrainedPrioritySet  standbyTaskClientsByTaskLoad|Map&lt;TaskId ,Integer &gt;  pendingStandbyTaskToNumberRemainingStandbys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument clients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument standbyTaskClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#84"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00084] The argument pendingStandbyTaskToNumberRemainingStandbys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00089] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method isAllowedTaskMovement arguments ClientState  source|ClientState  destination"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00103] For method isAllowedTaskMovement list of called methods Object monObjet|java.util.Map&lt;java.lang.String,java.lang.String&gt; source_clientTagsN186957|java.util.Map&lt;java.lang.String,java.lang.String&gt; destination_clientTagsN187074"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#103"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00103] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#103"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00103] The argument destination is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.isAllowedTaskMovement@POLYN186787 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.isAllowedTaskMovement@POLYN186787 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method fillClientsTagStatistics arguments Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;TagEntry ,Set&lt;UUID &gt; &gt;  tagEntryToClients|Map&lt;String ,Set&lt;String &gt; &gt;  tagKeyToValues"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#117"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00117] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#118"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00118] The argument tagEntryToClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument tagKeyToValues is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00121] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00122] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method assignStandbyTasksToClientsWithDifferentTags arguments int  numberOfStandbyClients|ConstrainedPrioritySet  standbyTaskClientsByTaskLoad|TaskId  activeTaskId|UUID  activeTaskClient|Set&lt;String &gt;  rackAwareAssignmentTags|Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;TaskId ,Integer &gt;  tasksToRemainingStandbys|Map&lt;String ,Set&lt;String &gt; &gt;  tagKeyToValues|Map&lt;TagEntry ,Set&lt;UUID &gt; &gt;  tagEntryToClients|Map&lt;TaskId ,UUID &gt;  pendingStandbyTasksToClientId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00132] For method assignStandbyTasksToClientsWithDifferentTags list of called methods Object monObjet|java.util.UUID standbyTaskClientsByTaskLoad_pollN189897"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#133"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00133] The argument standbyTaskClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#137"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00137] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#138"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00138] The argument tasksToRemainingStandbys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#141"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00141] The argument pendingStandbyTasksToClientId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00162] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00170] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN188635 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN188635 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN188635 the MagicNumber/String  'Assigning {} out of {} standby tasks for an active task [{}] with client tags {}. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN188635 the MagicNumber/String  'Standby task client tags are {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN188635 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN188635 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN188635 the MagicNumber/String  'Rack aware standby task assignment was not able to assign {} of {} standby tasks for the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN188635 the MagicNumber/String  'active task [{}] with the rack aware assignment tags {}. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN188635 the MagicNumber/String  'This may happen when there aren't enough application instances on different tag ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN188635 the MagicNumber/String  'dimensions compared to an active and corresponding standby task. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN188635 the MagicNumber/String  'Consider launching application instances on different tag dimensions than [{}]. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN188635 the MagicNumber/String  'Standby task assignment will fall back to assigning standby tasks to the least loaded clients.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#201"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00201] For method isClientUsedOnAnyOfTheTagEntries arguments UUID  client|Map&lt;TagEntry ,Set&lt;UUID &gt; &gt;  tagEntryToUsedClients"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#202"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00202] The argument tagEntryToUsedClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#206"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00206] For method updateClientsOnAlreadyUsedTagEntries arguments UUID  usedClient|int  countOfUsedClients|Set&lt;String &gt;  rackAwareAssignmentTags|Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;TagEntry ,Set&lt;UUID &gt; &gt;  tagEntryToClients|Map&lt;String ,Set&lt;String &gt; &gt;  tagKeyToValues|Map&lt;TagEntry ,Set&lt;UUID &gt; &gt;  tagEntryToUsedClients"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#208"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00208] The argument rackAwareAssignmentTags is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#209"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00209] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#210"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00210] The argument tagEntryToClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#211"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00211] The argument tagKeyToValues is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#212"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00212] The argument tagEntryToUsedClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00216] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00225] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00277] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00278] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00279] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.updateClientsOnAlreadyUsedTagEntries@POLYN191892 the MagicNumber/String  'Client tag with key [{}] will be ignored when computing rack aware standby ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.updateClientsOnAlreadyUsedTagEntries@POLYN191892 the MagicNumber/String  'task assignment because it is not part of the configured rack awareness [{}].' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#296"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00296] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00298] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.TagEntry.equals@POLYN194191 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.TagEntry.equals@POLYN194191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.TagEntry.equals@POLYN194191 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignPendingStandbyTasksToLeastLoadedClients@POLYN186060"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
