console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java 65 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AssignorConfiguration"
 , "c2" : "AssignorConfiguration(Map<String,?>)"
 , "c3" : "5"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "ReferenceContainer"
 , "c2" : "referenceContainer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "RebalanceProtocol"
 , "c2" : "rebalanceProtocol()"
 , "c3" : "20"
 , "c4" : "8"
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
   "c1" : "int"
 , "c2" : "configuredMetadataVersion(int)"
 , "c3" : "20"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "userEndPoint()"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "InternalTopicManager"
 , "c2" : "internalTopicManager()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CopartitionedTopicsEnforcer"
 , "c2" : "copartitionedTopicsEnforcer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AssignmentConfigs"
 , "c2" : "assignmentConfigs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TaskAssignor"
 , "c2" : "taskAssignor()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "AssignmentListener"
 , "c2" : "assignmentListener()"
 , "c3" : "3"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "34"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00025] The class AssignorConfiguration contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignorConfiguration@POLYN191923 the MagicNumber/String  'stream-thread [%s] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignorConfiguration@POLYN191923 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignorConfiguration@POLYN191923 the MagicNumber/String  'ReferenceContainer is not specified' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignorConfiguration@POLYN191923 the MagicNumber/String  '%s is not an instance of %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignorConfiguration@POLYN191923 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00080] For method rebalanceProtocol list of called methods Object monObjet|String streamsConfig_getStringN194102"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022 the MagicNumber/String  'Eager rebalancing protocol is enabled now for upgrade from {}.x' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022 the MagicNumber/String  'The eager rebalancing protocol is deprecated and will stop being supported in a future release.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022 the MagicNumber/String  ' Please be prepared to remove the 'upgrade.from' config soon.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022 the MagicNumber/String  'Unknown configuration value for parameter 'upgrade.from': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022 the MagicNumber/String  'Cooperative rebalancing protocol is enabled now' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00129] For method configuredMetadataVersion arguments int  priorVersion"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00129] For method configuredMetadataVersion list of called methods Object monObjet|String streamsConfig_getStringN195739"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634 the MagicNumber/String  'Downgrading metadata version from {} to 1 for upgrade from 0.10.0.x.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634 the MagicNumber/String  'Downgrading metadata version from {} to 2 for upgrade from {}.x.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634 the MagicNumber/String  'Unknown configuration value for parameter 'upgrade.from': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00176] For method userEndPoint list of called methods Object monObjet|String streamsConfig_getStringN197247"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.userEndPoint@POLYN197167 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.userEndPoint@POLYN197167 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.userEndPoint@POLYN197167 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.userEndPoint@POLYN197167 the MagicNumber/String  '%s Config %s isn't in the correct format. Expected a host:port pair but received %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.userEndPoint@POLYN197167 the MagicNumber/String  '%s Invalid port supplied in %s for config %s: %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.userEndPoint@POLYN197167 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.taskAssignor@POLYN198742 the MagicNumber/String  'Expected an instantiable class name for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.assignmentListener@POLYN199087 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.assignmentListener@POLYN199087 the MagicNumber/String  '%s is not an instance of %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00247] The class AssignmentConfigs contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#254"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00254] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignmentConfigs the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignmentConfigs.toString@POLYN202180 the MagicNumber/String  'AssignmentConfigs{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignmentConfigs.toString@POLYN202180 the MagicNumber/String  '\n  acceptableRecoveryLag=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignmentConfigs.toString@POLYN202180 the MagicNumber/String  '\n  maxWarmupReplicas=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignmentConfigs.toString@POLYN202180 the MagicNumber/String  '\n  numStandbyReplicas=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignmentConfigs.toString@POLYN202180 the MagicNumber/String  '\n  probingRebalanceIntervalMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignmentConfigs.toString@POLYN202180 the MagicNumber/String  '\n  rackAwareAssignmentTags=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignmentConfigs.toString@POLYN202180 the MagicNumber/String  '\n}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignorConfiguration@POLYN191923"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.assignmentListener@POLYN199087"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00043] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignorConfiguration@POLYN191923 the MagicNumber/String 'stream-thread [%s] ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00049] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignorConfiguration@POLYN191923 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#50"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00050] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignorConfiguration@POLYN191923 the MagicNumber/String 'ReferenceContainer is not specified' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignorConfiguration@POLYN191923 the MagicNumber/String '%s is not an instance of %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.AssignorConfiguration@POLYN191923 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#228"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00228] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.assignmentListener@POLYN199087 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#234"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00234] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.assignmentListener@POLYN199087 the MagicNumber/String '%s is not an instance of %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00131] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00135] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634 the MagicNumber/String 'Downgrading metadata version from {} to 1 for upgrade from 0.10.0.x.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00138] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00145] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634 the MagicNumber/String 'Downgrading metadata version from {} to 2 for upgrade from {}.x.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00149] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#169"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00169] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.configuredMetadataVersion@POLYN195634 the MagicNumber/String 'Unknown configuration value for parameter 'upgrade.from': ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#98"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00098] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022 the MagicNumber/String 'Eager rebalancing protocol is enabled now for upgrade from {}.x' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00099] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022 the MagicNumber/String 'The eager rebalancing protocol is deprecated and will stop being supported in a future release.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00100] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022 the MagicNumber/String ' Please be prepared to remove the 'upgrade.from' config soon.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00114] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022 the MagicNumber/String 'Unknown configuration value for parameter 'upgrade.from': ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/AssignorConfiguration.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.streams.processor.internals.assignment.AssignorConfiguration.rebalanceProtocol@POLYN194022 the MagicNumber/String 'Cooperative rebalancing protocol is enabled now' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
