console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java 67 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "StandbyTaskAssignor"
 , "c2" : "org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#54"
 , "c1" : "boolean"
 , "c2" : "assign(Map&lt;UUID,ClientState&gt;;Set&lt;TaskId&gt;;Set&lt;TaskId&gt;;AssignorConfiguration.AssignmentConfigs)"
 , "c3" : "5"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00108"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#108"
 , "c1" : "void"
 , "c2" : "assignPendingStandbyTasksToLeastLoadedClients(Map&lt;UUID,ClientState&gt;;int;ConstrainedPrioritySet;Map&lt;TaskId,Integer&gt;)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00130"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#130"
 , "c1" : "boolean"
 , "c2" : "isAllowedTaskMovement(ClientState;ClientState)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#144"
 , "c1" : "void"
 , "c2" : "fillClientsTagStatistics(Map&lt;UUID,ClientState&gt;;Map&lt;TagEntry,Set&lt;UUID&gt;&gt;;Map&lt;String,Set&lt;String&gt;&gt;)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00159"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#159"
 , "c1" : "void"
 , "c2" : "assignStandbyTasksToClientsWithDifferentTags(int;ConstrainedPrioritySet;TaskId;UUID;Set&lt;String&gt;;Map&lt;UUID,ClientState&gt;;Map&lt;TaskId,Integer&gt;;Map&lt;String,Set&lt;String&gt;&gt;;Map&lt;TagEntry,Set&lt;UUID&gt;&gt;;Map&lt;TaskId,UUID&gt;)"
 , "c3" : "6"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00228"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#228"
 , "c1" : "boolean"
 , "c2" : "isClientUsedOnAnyOfTheTagEntries(UUID;Map&lt;TagEntry,Set&lt;UUID&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00233"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#233"
 , "c1" : "void"
 , "c2" : "updateClientsOnAlreadyUsedTagEntries(UUID;int;Set&lt;String&gt;;Map&lt;UUID,ClientState&gt;;Map&lt;TagEntry,Set&lt;UUID&gt;&gt;;Map&lt;String,Set&lt;String&gt;&gt;;Map&lt;TagEntry,Set&lt;UUID&gt;&gt;)"
 , "c3" : "5"
 , "c4" : "10"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method assign arguments Map&lt;UUID ,ClientState &gt;  clients|Set&lt;TaskId &gt;  allTaskIds|Set&lt;TaskId &gt;  statefulTaskIds|AssignorConfiguration.AssignmentConfigs  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument clients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00077] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00077] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assign@POLYN194257 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method assignPendingStandbyTasksToLeastLoadedClients arguments Map&lt;UUID ,ClientState &gt;  clients|int  numStandbyReplicas|ConstrainedPrioritySet  standbyTaskClientsByTaskLoad|Map&lt;TaskId ,Integer &gt;  pendingStandbyTaskToNumberRemainingStandbys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#108"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00108] The argument clients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument standbyTaskClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#111"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00111] The argument pendingStandbyTaskToNumberRemainingStandbys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00116] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method isAllowedTaskMovement arguments ClientState  source|ClientState  destination"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00130] For method isAllowedTaskMovement list of called methods Object monObjet|java.util.Map&lt;java.lang.String,java.lang.String&gt; source_clientTagsN197397|java.util.Map&lt;java.lang.String,java.lang.String&gt; destination_clientTagsN197516"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#130"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00130] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#130"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00130] The argument destination is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.isAllowedTaskMovement@POLYN197225 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.isAllowedTaskMovement@POLYN197225 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method fillClientsTagStatistics arguments Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;TagEntry ,Set&lt;UUID &gt; &gt;  tagEntryToClients|Map&lt;String ,Set&lt;String &gt; &gt;  tagKeyToValues"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#144"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00144] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#145"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00145] The argument tagEntryToClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#146"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00146] The argument tagKeyToValues is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00148] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00149] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method assignStandbyTasksToClientsWithDifferentTags arguments int  numberOfStandbyClients|ConstrainedPrioritySet  standbyTaskClientsByTaskLoad|TaskId  activeTaskId|UUID  activeTaskClient|Set&lt;String &gt;  rackAwareAssignmentTags|Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;TaskId ,Integer &gt;  tasksToRemainingStandbys|Map&lt;String ,Set&lt;String &gt; &gt;  tagKeyToValues|Map&lt;TagEntry ,Set&lt;UUID &gt; &gt;  tagEntryToClients|Map&lt;TaskId ,UUID &gt;  pendingStandbyTasksToClientId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00159] For method assignStandbyTasksToClientsWithDifferentTags list of called methods Object monObjet|java.util.UUID standbyTaskClientsByTaskLoad_pollN200353"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#160"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00160] The argument standbyTaskClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#164"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00164] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument tasksToRemainingStandbys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#168"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00168] The argument pendingStandbyTasksToClientId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00189] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00197] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN199081 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN199081 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN199081 the MagicNumber/String  'Assigning {} out of {} standby tasks for an active task [{}] with client tags {}. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN199081 the MagicNumber/String  'Standby task client tags are {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN199081 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN199081 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN199081 the MagicNumber/String  'Rack aware standby task assignment was not able to assign {} of {} standby tasks for the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN199081 the MagicNumber/String  'active task [{}] with the rack aware assignment tags {}. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN199081 the MagicNumber/String  'This may happen when there aren't enough application instances on different tag ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN199081 the MagicNumber/String  'dimensions compared to an active and corresponding standby task. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN199081 the MagicNumber/String  'Consider launching application instances on different tag dimensions than [{}]. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignStandbyTasksToClientsWithDifferentTags@POLYN199081 the MagicNumber/String  'Standby task assignment will fall back to assigning standby tasks to the least loaded clients.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#228"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00228] For method isClientUsedOnAnyOfTheTagEntries arguments UUID  client|Map&lt;TagEntry ,Set&lt;UUID &gt; &gt;  tagEntryToUsedClients"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#229"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00229] The argument tagEntryToUsedClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#233"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00233] For method updateClientsOnAlreadyUsedTagEntries arguments UUID  usedClient|int  countOfUsedClients|Set&lt;String &gt;  rackAwareAssignmentTags|Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;TagEntry ,Set&lt;UUID &gt; &gt;  tagEntryToClients|Map&lt;String ,Set&lt;String &gt; &gt;  tagKeyToValues|Map&lt;TagEntry ,Set&lt;UUID &gt; &gt;  tagEntryToUsedClients"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#235"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00235] The argument rackAwareAssignmentTags is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#236"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00236] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#237"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00237] The argument tagEntryToClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#238"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00238] The argument tagKeyToValues is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#239"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00239] The argument tagEntryToUsedClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00243] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00252] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00304] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00305] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00306] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.updateClientsOnAlreadyUsedTagEntries@POLYN202350 the MagicNumber/String  'Client tag with key [{}] will be ignored when computing rack aware standby ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.updateClientsOnAlreadyUsedTagEntries@POLYN202350 the MagicNumber/String  'task assignment because it is not part of the configured rack awareness [{}].' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#323"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00323] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00325] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.TagEntry.equals@POLYN204661 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.TagEntry.equals@POLYN204661 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.TagEntry.equals@POLYN204661 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.ClientTagAwareStandbyTaskAssignor.assignPendingStandbyTasksToLeastLoadedClients@POLYN196496"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ClientTagAwareStandbyTaskAssignor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
