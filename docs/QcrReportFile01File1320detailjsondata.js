console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java 524 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.ReplicationControlManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.ReplicationControlManager" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Map<String,String>"
 , "c2" : "translateCreationConfigs(CreateableTopicConfigCollection)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ReplicationControlManager"
 , "c2" : "ReplicationControlManager(SnapshotRegistry;LogContext;short;int;int;ConfigurationControlManager;ClusterControlManager;ControllerMetrics;Optional<CreateTopicPolicy>;FeatureControlManager)"
 , "c3" : "1"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "replay(TopicRecord)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "replay(PartitionRecord)"
 , "c3" : "7"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateReassigningTopicsIfNeeded(Uuid;int;boolean;boolean)"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "replay(PartitionChangeRecord)"
 , "c3" : "8"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "replay(RemoveTopicRecord)"
 , "c3" : "7"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<CreateTopicsResponseData>"
 , "c2" : "createTopics(CreateTopicsRequestData;Set<String>)"
 , "c3" : "10"
 , "c4" : "30"
}} 
,
{ "ligne" : {
   "c1" : "ApiError"
 , "c2" : "createTopic(CreatableTopic;List<ApiMessageAndVersion>;Map<String,CreatableTopicResult>;boolean)"
 , "c3" : "20"
 , "c4" : "47"
}} 
,
{ "ligne" : {
   "c1" : "ApiError"
 , "c2" : "maybeCheckCreateTopicPolicy(Supplier<CreateTopicPolicy.RequestMetadata>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateNewTopicNames(Map<String,ApiError>;CreatableTopicCollection;Map<String,?extendsSet<String>>)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Map<ConfigResource,Map<String,Entry<OpType,String>>>"
 , "c2" : "computeConfigChanges(Map<String,ApiError>;CreatableTopicCollection)"
 , "c3" : "9"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,ResultOrError<Uuid>>"
 , "c2" : "findTopicIds(long;Collection<String>)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Uuid>"
 , "c2" : "findAllTopicIds(long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<Uuid,ResultOrError<String>>"
 , "c2" : "findTopicNames(long;Collection<Uuid>)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<Map<Uuid,ApiError>>"
 , "c2" : "deleteTopics(Collection<Uuid>)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "deleteTopic(Uuid;List<ApiMessageAndVersion>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "PartitionRegistration"
 , "c2" : "getPartition(Uuid;int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "TopicControlInfo"
 , "c2" : "getTopic(Uuid)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Uuid"
 , "c2" : "getTopicId(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "BrokersToIsrs"
 , "c2" : "brokersToIsrs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicIdPartition>"
 , "c2" : "imbalancedPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<AlterPartitionResponseData>"
 , "c2" : "alterPartition(ControllerRequestContext;AlterPartitionRequestData)"
 , "c3" : "12"
 , "c4" : "33"
}} 
,
{ "ligne" : {
   "c1" : "Errors"
 , "c2" : "validateAlterPartitionData(int;TopicControlInfo;int;PartitionRegistration;Function<Integer,Boolean>;short;AlterPartitionRequestData.PartitionData)"
 , "c3" : "12"
 , "c4" : "23"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleBrokerFenced(int;List<ApiMessageAndVersion>)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleBrokerUnregistered(int;long;List<ApiMessageAndVersion>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleBrokerUnfenced(int;long;List<ApiMessageAndVersion>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleBrokerInControlledShutdown(int;long;List<ApiMessageAndVersion>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<ElectLeadersResponseData>"
 , "c2" : "electLeaders(ElectLeadersRequestData)"
 , "c3" : "9"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "ElectionType"
 , "c2" : "electionType(byte)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ApiError"
 , "c2" : "electLeader(String;int;ElectionType;List<ApiMessageAndVersion>)"
 , "c3" : "9"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<BrokerHeartbeatReply>"
 , "c2" : "processBrokerHeartbeat(BrokerHeartbeatRequestData;long)"
 , "c3" : "6"
 , "c4" : "18"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<Void>"
 , "c2" : "unregisterBroker(int)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<Void>"
 , "c2" : "maybeFenceOneStaleBroker()"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "arePartitionLeadersImbalanced()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<Boolean>"
 , "c2" : "maybeBalancePartitionLeaders()"
 , "c3" : "5"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<List<CreatePartitionsTopicResult>>"
 , "c2" : "createPartitions(List<CreatePartitionsTopic>)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "createPartitions(CreatePartitionsTopic;List<ApiMessageAndVersion>)"
 , "c3" : "16"
 , "c4" : "36"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateManualPartitionAssignment(List<Integer>;OptionalInt)"
 , "c3" : "6"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "generateLeaderAndIsrUpdates(String;int;int;List<ApiMessageAndVersion>;Iterator<TopicIdPartition>)"
 , "c3" : "10"
 , "c4" : "21"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<AlterPartitionReassignmentsResponseData>"
 , "c2" : "alterPartitionReassignments(AlterPartitionReassignmentsRequestData)"
 , "c3" : "3"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "alterPartitionReassignment(String;ReassignablePartition;List<ApiMessageAndVersion>)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "Optional<ApiMessageAndVersion>"
 , "c2" : "cancelPartitionReassignment(String;TopicIdPartition;PartitionRegistration)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "Optional<ApiMessageAndVersion>"
 , "c2" : "changePartitionReassignment(TopicIdPartition;PartitionRegistration;ReassignablePartition)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "ListPartitionReassignmentsResponseData"
 , "c2" : "listPartitionReassignments(List<ListPartitionReassignmentsTopics>)"
 , "c3" : "6"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "listReassigningTopic(ListPartitionReassignmentsResponseData;Uuid;List<Integer>)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Optional<OngoingPartitionReassignment>"
 , "c2" : "getOngoingPartitionReassignment(TopicControlInfo;int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ReplicationControlIterator"
 , "c2" : "iterator(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.svg" }

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
 , "c4" : "47"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "46"
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "73"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "275"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "52"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "19"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00123] The class ReplicationControlManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00126] The class Builder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00138] For method setSnapshotRegistry arguments SnapshotRegistry  snapshotRegistry"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method setLogContext arguments LogContext  logContext"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method setDefaultReplicationFactor arguments short  defaultReplicationFactor"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method setDefaultNumPartitions arguments int  defaultNumPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00158] For method setMaxElectionsPerImbalance arguments int  maxElectionsPerImbalance"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method setConfigurationControl arguments ConfigurationControlManager  configurationControl"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00168] For method setClusterControl arguments ClusterControlManager  clusterControl"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00173] For method setControllerMetrics arguments ControllerMetrics  controllerMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00178] For method setCreateTopicPolicy arguments Optional&lt;CreateTopicPolicy &gt;  createTopicPolicy"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#183"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00183] For method setFeatureControl arguments FeatureControlManager  featureControl"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.controller.ReplicationControlManager.Builder.build@POLYN506614 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.controller.ReplicationControlManager.Builder.build@POLYN506614 the MagicNumber/String  'Configuration control must be set before building' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.controller.ReplicationControlManager.Builder.build@POLYN506614 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.controller.ReplicationControlManager.Builder.build@POLYN506614 the MagicNumber/String  'Cluster controller must be set before building' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.controller.ReplicationControlManager.Builder.build@POLYN506614 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.controller.ReplicationControlManager.Builder.build@POLYN506614 the MagicNumber/String  'Metrics must be set before building' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.controller.ReplicationControlManager.Builder.build@POLYN506614 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.controller.ReplicationControlManager.Builder.build@POLYN506614 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.controller.ReplicationControlManager.Builder.build@POLYN506614 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.controller.ReplicationControlManager.Builder.build@POLYN506614 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.controller.ReplicationControlManager.Builder.build@POLYN506614 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00221] The class KRaftClusterDescriber contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00228] The class TopicControlInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.controller.ReplicationControlManager.TopicControlInfo.TopicControlInfo@POLYN508555 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#249"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00249] For method translateCreationConfigs arguments CreateableTopicConfigCollection  collection"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#249"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00249] The argument collection is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#308"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00308] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.controller.ReplicationControlManager.ReplicationControlManager@POLYN512162 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.controller.ReplicationControlManager.ReplicationControlManager@POLYN512162 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.controller.ReplicationControlManager.ReplicationControlManager@POLYN512162 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.controller.ReplicationControlManager.ReplicationControlManager@POLYN512162 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00334] In method org.apache.kafka.controller.ReplicationControlManager.ReplicationControlManager@POLYN512162 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#337"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00337] For method replay arguments TopicRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#337"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00337] For method replay list of called methods Object monObjet|String Topic_unifyCollisionCharsN514378"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#337"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00337] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN514044 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN514044 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN514044 the MagicNumber/String  'Created topic {} with topic ID {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#354"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00354] For method replay arguments PartitionRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#354"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00354] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN515449 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN515449 the MagicNumber/String  'Tried to create partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN515449 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN515449 the MagicNumber/String  ', but no topic with that ID was found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN515449 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN515449 the MagicNumber/String  ' with topic ID ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN515449 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN515449 the MagicNumber/String  'Created partition {} and {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN515449 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00372"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN515449 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#392"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00392] For method updateReassigningTopicsIfNeeded arguments Uuid  topicId|int  partitionId|boolean  wasReassigning|boolean  isReassigning"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#392"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00392] For method updateReassigningTopicsIfNeeded list of called methods Object monObjet|int[] Replicas_copyWithoutN519370"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.controller.ReplicationControlManager.updateReassigningTopicsIfNeeded@POLYN518614 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#410"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00410] For method replay arguments PartitionChangeRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#410"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00410] For method replay list of called methods Object monObjet|org.apache.kafka.metadata.PartitionRegistration prevPartitionInfo_mergeN520617"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#410"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00410] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  'Tried to create partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  ', but no topic with that ID was found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  'Tried to create partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00419"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00419"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  ', but no partition with that id was found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  ' with topic ID ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00441] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00441] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00442"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  'Replayed partition assignment change {} for topic {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00444"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN519726 the MagicNumber/String  'Replayed partition change {} for topic {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#448"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00448] For method replay arguments RemoveTopicRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#448"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00448] For method replay list of called methods Object monObjet|String Topic_unifyCollisionCharsN523267"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#448"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00448] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00473] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00451"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00451] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN522670 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN522670 the MagicNumber/String  'Can't find topic with ID ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00453"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#453"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00453] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN522670 the MagicNumber/String  ' to remove.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00459"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00459] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN522670 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00476"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#476"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00476] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN522670 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00490"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#490"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00490] In method org.apache.kafka.controller.ReplicationControlManager.replay@POLYN522670 the MagicNumber/String  'Removed topic {} with ID {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#493"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00493] For method createTopics arguments CreateTopicsRequestData  request|Set&lt;String &gt;  describable"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#493"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00493] For method createTopics list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.config.ConfigResource,Map&lt;String,Entry&lt;OpType,String&gt;&gt;&gt; computeConfigChangesN526453|org.apache.kafka.controller.ControllerResult&lt;Map&lt;ConfigResource,ApiError&gt;&gt; configurationControl_incrementalAlterConfigsN526639"
}} 
,
{ "ligne" : {
   "c1" : "00494"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#494"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00494] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00494"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#494"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00494] The argument describable is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00523"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00523] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00526] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#539"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00539] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00550"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#550"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00550] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  'Topic '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  '' already exists.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00537] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00540"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#540"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00540] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00545"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#545"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00545] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#546"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00546] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  ' (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#546"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00546] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00547] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00552"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#552"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00552] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00553] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  'SUCCESS' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00554"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#554"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00554] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00557"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00557] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  'Validate-only CreateTopics result(s): {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00560"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00560] In method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String  'CreateTopics result(s): {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#565"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00565] For method createTopic arguments CreatableTopic  topic|List&lt;ApiMessageAndVersion &gt;  records|Map&lt;String ,CreatableTopicResult &gt;  successes|boolean  authorizedToReturnConfigs"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#565"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00565] For method createTopic list of called methods Object monObjet|java.util.Map&lt;String,String&gt; translateCreationConfigsN530604|org.apache.kafka.common.requests.ApiError maybeCheckCreateTopicPolicyN536365|org.apache.kafka.common.Uuid Uuid_randomUuidN536716|java.util.Map&lt;String,org.apache.kafka.clients.admin.ConfigEntry&gt; configurationControl_computeEffectiveTopicConfigsN537149"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#565"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00565] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00566"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#566"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00566] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00567"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#567"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00567] The argument successes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00591"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#591"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00591] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00610"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00610] The same method call topic.replicationFactor() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00613"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#613"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00613] The same method call topic.numPartitions() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00628"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#628"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00628] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00629"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#629"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00629] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00671"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00671] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00691"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#691"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00691] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00572"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#572"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00572] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00574"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  'A manual partition assignment was specified, but replication ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00575"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00575] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  'factor was not set to -1.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00579"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#579"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00579] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  'A manual partition assignment was specified, but numPartitions ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00580"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00580] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  'was not set to -1.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00586] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  'Found multiple manual partition assignments for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00595"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#595"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00595] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  'All brokers specified in the manual partition assignment for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00596] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  'partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00596] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  ' are fenced or in controlled shutdown.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00607"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#607"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00607] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00607"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#607"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00607] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00610"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00610] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00610"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00610] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00612"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#612"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00612] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  'Replication factor must be larger than 0, or -1 to use the default value.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00613"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#613"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00613] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00613"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#613"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00613] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00615"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#615"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00615] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  'Number of partitions was set to an invalid non-positive value.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00617"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#617"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00617] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00619"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#619"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00619] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00623"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#623"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00623] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00627"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#627"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00627] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#636"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00636] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  'Unable to replicate the partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00637"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#637"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00637] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  ' time(s): All brokers are currently fenced or in controlled shutdown.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00645"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#645"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00645] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00647"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#647"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00647] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00648"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#648"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00648] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00652"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#652"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00652] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  'Unable to replicate the partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00653"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#653"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00653] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  ' time(s): ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00656"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#656"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00656] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00664"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#664"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00664] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00674"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#674"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00674] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00680"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#680"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00680] In method org.apache.kafka.controller.ReplicationControlManager.createTopic@POLYN530337 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00697"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#697"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00697] For method maybeCheckCreateTopicPolicy arguments Supplier&lt;CreateTopicPolicy.RequestMetadata &gt;  supplier"
}} 
,
{ "ligne" : {
   "c1" : "00697"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#697"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00697] The argument supplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00708"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#708"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00708] For method validateNewTopicNames arguments Map&lt;String ,ApiError &gt;  topicErrors|CreatableTopicCollection  topics|Map&lt;String ,?  extends Set&lt;String &gt; &gt;  topicsWithCollisionChars"
}} 
,
{ "ligne" : {
   "c1" : "00708"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#708"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00708] For method validateNewTopicNames list of called methods Object monObjet|String Topic_unifyCollisionCharsN540847"
}} 
,
{ "ligne" : {
   "c1" : "00708"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#708"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00708] The argument topicErrors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00710"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#710"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00710] The argument topicsWithCollisionChars is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00715"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#715"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00715] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00720"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#720"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00720] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00721"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#721"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00721] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00722"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#722"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00722] In method org.apache.kafka.controller.ReplicationControlManager.validateNewTopicNames@POLYN539954 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00724"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#724"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00724] In method org.apache.kafka.controller.ReplicationControlManager.validateNewTopicNames@POLYN539954 the MagicNumber/String  'Topic '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00724"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#724"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00724] In method org.apache.kafka.controller.ReplicationControlManager.validateNewTopicNames@POLYN539954 the MagicNumber/String  '' collides with existing topic: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00731"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#731"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00731] For method computeConfigChanges arguments Map&lt;String ,ApiError &gt;  topicErrors|CreatableTopicCollection  topics"
}} 
,
{ "ligne" : {
   "c1" : "00732"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#732"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00732] The argument topicErrors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00737"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#737"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00737] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00738"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#738"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00738] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00739"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#739"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00739] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00740"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#740"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00740] In method org.apache.kafka.controller.ReplicationControlManager.computeConfigChanges@POLYN541558 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#748"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00748] In method org.apache.kafka.controller.ReplicationControlManager.computeConfigChanges@POLYN541558 the MagicNumber/String  'Null value not supported for topic configs: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#748"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00748] In method org.apache.kafka.controller.ReplicationControlManager.computeConfigChanges@POLYN541558 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00756"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#756"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00756] For method findTopicIds arguments long  offset|Collection&lt;String &gt;  names"
}} 
,
{ "ligne" : {
   "c1" : "00756"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#756"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00756] The argument names is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00762"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#762"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00762] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00759"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#759"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00759] In method org.apache.kafka.controller.ReplicationControlManager.findTopicIds@POLYN543537 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00760"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#760"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00760] In method org.apache.kafka.controller.ReplicationControlManager.findTopicIds@POLYN543537 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00760"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#760"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00760] In method org.apache.kafka.controller.ReplicationControlManager.findTopicIds@POLYN543537 the MagicNumber/String  'Invalid null topic name.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00763"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#763"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00763] In method org.apache.kafka.controller.ReplicationControlManager.findTopicIds@POLYN543537 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00774"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#774"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00774] For method findAllTopicIds arguments long  offset"
}} 
,
{ "ligne" : {
   "c1" : "00782"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#782"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00782] For method findTopicNames arguments long  offset|Collection&lt;Uuid &gt;  ids"
}} 
,
{ "ligne" : {
   "c1" : "00782"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#782"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00782] The argument ids is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00789"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#789"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00789] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00785"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#785"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00785] In method org.apache.kafka.controller.ReplicationControlManager.findTopicNames@POLYN545400 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00787"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#787"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00787] In method org.apache.kafka.controller.ReplicationControlManager.findTopicNames@POLYN545400 the MagicNumber/String  'Attempt to find topic with invalid topicId ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00790"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#790"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00790] In method org.apache.kafka.controller.ReplicationControlManager.findTopicNames@POLYN545400 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00800"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#800"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00800] For method deleteTopics arguments Collection&lt;Uuid &gt;  ids"
}} 
,
{ "ligne" : {
   "c1" : "00800"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#800"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00800] The argument ids is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00807"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#807"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00807] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00809"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#809"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00809] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00810"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#810"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00810] In method org.apache.kafka.controller.ReplicationControlManager.deleteTopics@POLYN546793 the MagicNumber/String  'Unexpected deleteTopics error for {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#817"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00817] For method deleteTopic arguments Uuid  id|List&lt;ApiMessageAndVersion &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#817"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00817] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00819"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#819"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00819] In method org.apache.kafka.controller.ReplicationControlManager.deleteTopic@POLYN548029 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00827"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#827"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00827] For method getPartition arguments Uuid  topicId|int  partitionId"
}} 
,
{ "ligne" : {
   "c1" : "00829"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#829"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00829] In method org.apache.kafka.controller.ReplicationControlManager.getPartition@POLYN548611 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00830"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#830"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00830] In method org.apache.kafka.controller.ReplicationControlManager.getPartition@POLYN548611 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00836"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#836"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00836] For method getTopic arguments Uuid  topicId"
}} 
,
{ "ligne" : {
   "c1" : "00840"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#840"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00840] For method getTopicId arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00854"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#854"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00854] For method alterPartition arguments ControllerRequestContext  context|AlterPartitionRequestData  request"
}} 
,
{ "ligne" : {
   "c1" : "00854"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#854"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00854] For method alterPartition list of called methods Object monObjet|RequestHeaderData context_requestHeaderN549649|Errors validateAlterPartitionDataN551882|java.util.Optional&lt;org.apache.kafka.server.common.ApiMessageAndVersion&gt; builder_buildN553165|org.apache.kafka.controller.ControllerResult&lt;AlterPartitionResponseData&gt; partition_mergeN553513"
}} 
,
{ "ligne" : {
   "c1" : "00855"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#855"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00855] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00856"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#856"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00856] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00863"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#863"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00863] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00869"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#869"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00869] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00871"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#871"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00871] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00872"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#872"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00872] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00882"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#882"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00882] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00883"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#883"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00883] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00885"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#885"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00885] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00887"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#887"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00887] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00906"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#906"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00906] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00918"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00918] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00921"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#921"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00921] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00921"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#921"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00921] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00936"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#936"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00936] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00885"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#885"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00885] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00887"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#887"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00887] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00906"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#906"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00906] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00918"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00918] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00921"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#921"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00921] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00921"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#921"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00921] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00936"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#936"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00936] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00927"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#927"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00927] The same method call request.brokerId()change.leader() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00869"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#869"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00869] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00870"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#870"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00870] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00871"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#871"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00871] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00877"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#877"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00877] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  'Rejecting AlterPartition request for unknown topic ID {} or name {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00924"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#924"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00924] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  'Node {} has altered ISR for {}-{} to {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00941"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#941"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00941] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00942"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#942"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00942] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  'AlterPartition request from node {} for {}-{} completed ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00943"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#943"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00943] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  'the ongoing partition reassignment and triggered a ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00944"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#944"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00944] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  'leadership change. Returning {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00950"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#950"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00950] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00951"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#951"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00951] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00952"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#952"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00952] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  'AlterPartition request from node {} for {}-{} completed ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00953"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#953"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00953] In method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String  'the ongoing partition reassignment.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00974"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#974"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00974] For method validateAlterPartitionData arguments int  brokerId|TopicControlInfo  topic|int  partitionId|PartitionRegistration  partition|Function&lt;Integer ,Boolean &gt;  isEligibleReplica|short  requestApiVersion|AlterPartitionRequestData.PartitionData  partitionData"
}} 
,
{ "ligne" : {
   "c1" : "00974"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#974"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00974] For method validateAlterPartitionData list of called methods Object monObjet|int[] Replicas_toArrayN557741"
}} 
,
{ "ligne" : {
   "c1" : "00976"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#976"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00976] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00979"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#979"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00979] The argument isEligibleReplica is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00981"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#981"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00981] The argument partitionData is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00983"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#983"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00983] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00984"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#984"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00984] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'Rejecting AlterPartition request for unknown partition {}-{}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00990"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#990"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00990] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'Rejecting AlterPartition request from node {} for {}-{} because ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00991"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#991"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00991] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'the current leader epoch is {}, not {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00997"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#997"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00997] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'Rejecting AlterPartition request from node {} for {}-{} because ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00998"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#998"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00998] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'the current leader is {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01004"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1004"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01004] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'Rejecting AlterPartition request from node {} for {}-{} because ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01005"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1005"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01005] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'the current partition epoch is {}, not {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01013"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1013"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01013] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'Rejecting AlterPartition request from node {} for {}-{} because ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01014"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1014"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01014] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'it specified an invalid ISR {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1021"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01021] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'Rejecting AlterPartition request from node {} for {}-{} because ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01022"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01022] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'it specified an invalid ISR {} that doesn't include itself.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01028"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1028"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01028] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1029"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01029] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'Rejecting AlterPartition request from node {} for {}-{} because ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01030"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1030"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01030] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'the ISR {} had more than one replica while the leader was still ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01031"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1031"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01031] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'recovering from an unclean leader election {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01039"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1039"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01039] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'Rejecting AlterPartition request from node {} for {}-{} because ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1040"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01040] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'the leader recovery state cannot change from RECOVERED to RECOVERING.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1050"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01050] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'Rejecting AlterPartition request from node {} for {}-{} because ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1051"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01051] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  'it specified ineligible replicas {} in the new ISR {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01054"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1054"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01054] In method org.apache.kafka.controller.ReplicationControlManager.validateAlterPartitionData@POLYN556137 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1065"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01065] For method handleBrokerFenced arguments int  brokerId|List&lt;ApiMessageAndVersion &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "01065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1065"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01065] For method handleBrokerFenced list of called methods Object monObjet|java.util.Map&lt;Integer,org.apache.kafka.metadata.BrokerRegistration&gt; clusterControl_brokerRegistrationsN560592"
}} 
,
{ "ligne" : {
   "c1" : "01065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1065"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01065] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01067"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1067"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01067] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerFenced@POLYN560453 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1068"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01068] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerFenced@POLYN560453 the MagicNumber/String  'Can't find broker registration for broker ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01070"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1070"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01070] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerFenced@POLYN560453 the MagicNumber/String  'handleBrokerFenced' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01076"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1076"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01076] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerFenced@POLYN560453 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1080"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01080] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerFenced@POLYN560453 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1085"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01085] For method handleBrokerUnregistered arguments int  brokerId|long  brokerEpoch|List&lt;ApiMessageAndVersion &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "01086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1086"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01086] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1087"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01087] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerUnregistered@POLYN561974 the MagicNumber/String  'handleBrokerUnregistered' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01091"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1091"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01091] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerUnregistered@POLYN561974 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01095"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1095"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01095] For method handleBrokerUnfenced arguments int  brokerId|long  brokerEpoch|List&lt;ApiMessageAndVersion &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "01095"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1095"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01095] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01100"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01100] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerUnfenced@POLYN562816 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01103"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01103] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerUnfenced@POLYN562816 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01105"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01105] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerUnfenced@POLYN562816 the MagicNumber/String  'handleBrokerUnfenced' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01110"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01110] For method handleBrokerInControlledShutdown arguments int  brokerId|long  brokerEpoch|List&lt;ApiMessageAndVersion &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "01110"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01110] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01116"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01116] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerInControlledShutdown@POLYN564063 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01118] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerInControlledShutdown@POLYN564063 the MagicNumber/String  'enterControlledShutdown[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01118] In method org.apache.kafka.controller.ReplicationControlManager.handleBrokerInControlledShutdown@POLYN564063 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01122"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01122] For method electLeaders arguments ElectLeadersRequestData  request"
}} 
,
{ "ligne" : {
   "c1" : "01122"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01122] For method electLeaders list of called methods Object monObjet|org.apache.kafka.common.requests.ApiError electLeaderN566111|org.apache.kafka.common.requests.ApiError electLeaderN567092"
}} 
,
{ "ligne" : {
   "c1" : "01122"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1122"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01122] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01133"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01133] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01134] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01137"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01137] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01140"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01140"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01155"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01155] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01159"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01159"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01126"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01126] In method org.apache.kafka.controller.ReplicationControlManager.electLeaders@POLYN564937 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01138"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01138] In method org.apache.kafka.controller.ReplicationControlManager.electLeaders@POLYN564937 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01170"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01170] For method electionType arguments byte  electionType"
}} 
,
{ "ligne" : {
   "c1" : "01174"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01174] In method org.apache.kafka.controller.ReplicationControlManager.electionType@POLYN567637 the MagicNumber/String  'Unknown election type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01178] For method electLeader arguments String  topic|int  partitionId|ElectionType  electionType|List&lt;ApiMessageAndVersion &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "01178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01178] For method electLeader list of called methods Object monObjet|java.util.Optional&lt;org.apache.kafka.server.common.ApiMessageAndVersion&gt; builder_buildN569966"
}} 
,
{ "ligne" : {
   "c1" : "01179"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1179"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01179] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01181"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01181] In method org.apache.kafka.controller.ReplicationControlManager.electLeader@POLYN567961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01183"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01183] In method org.apache.kafka.controller.ReplicationControlManager.electLeader@POLYN567961 the MagicNumber/String  'No such topic as ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01186] In method org.apache.kafka.controller.ReplicationControlManager.electLeader@POLYN567961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01188"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01188] In method org.apache.kafka.controller.ReplicationControlManager.electLeader@POLYN567961 the MagicNumber/String  'No such topic id as ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01191"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01191] In method org.apache.kafka.controller.ReplicationControlManager.electLeader@POLYN567961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01193"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01193] In method org.apache.kafka.controller.ReplicationControlManager.electLeader@POLYN567961 the MagicNumber/String  'No such partition as ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01193"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01193] In method org.apache.kafka.controller.ReplicationControlManager.electLeader@POLYN567961 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01222"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1222"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01222] For method processBrokerHeartbeat arguments BrokerHeartbeatRequestData  request|long  lastCommittedOffset"
}} 
,
{ "ligne" : {
   "c1" : "01222"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1222"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01222] For method processBrokerHeartbeat list of called methods Object monObjet|org.apache.kafka.controller.BrokerHeartbeatManager clusterControl_heartbeatManagerN570872|org.apache.kafka.controller.BrokerControlStates heartbeatManager_calculateNextBrokerStateN570947"
}} 
,
{ "ligne" : {
   "c1" : "01223"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1223"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01223] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01258"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1258"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01258] For method unregisterBroker arguments int  brokerId"
}} 
,
{ "ligne" : {
   "c1" : "01258"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1258"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01258] For method unregisterBroker list of called methods Object monObjet|java.util.Map&lt;Integer,org.apache.kafka.metadata.BrokerRegistration&gt; clusterControl_brokerRegistrationsN572771"
}} 
,
{ "ligne" : {
   "c1" : "01260"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01260] In method org.apache.kafka.controller.ReplicationControlManager.unregisterBroker@POLYN572674 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01261"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01261] In method org.apache.kafka.controller.ReplicationControlManager.unregisterBroker@POLYN572674 the MagicNumber/String  'Broker ID ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01262"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01262] In method org.apache.kafka.controller.ReplicationControlManager.unregisterBroker@POLYN572674 the MagicNumber/String  ' is not currently registered' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01266"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01266] In method org.apache.kafka.controller.ReplicationControlManager.unregisterBroker@POLYN572674 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01269"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1269"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01269] For method maybeFenceOneStaleBroker list of called methods Object monObjet|org.apache.kafka.controller.BrokerHeartbeatManager clusterControl_heartbeatManagerN573582"
}} 
,
{ "ligne" : {
   "c1" : "01276"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01276] In method org.apache.kafka.controller.ReplicationControlManager.maybeFenceOneStaleBroker@POLYN573402 the MagicNumber/String  'Fencing broker {} because its session has timed out.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01280"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01280] In method org.apache.kafka.controller.ReplicationControlManager.maybeFenceOneStaleBroker@POLYN573402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01298"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01298] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01304"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01304] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01311"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01311] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01291"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01291] In method org.apache.kafka.controller.ReplicationControlManager.maybeBalancePartitionLeaders@POLYN574484 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01294"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01294] In method org.apache.kafka.controller.ReplicationControlManager.maybeBalancePartitionLeaders@POLYN574484 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01299"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01299] In method org.apache.kafka.controller.ReplicationControlManager.maybeBalancePartitionLeaders@POLYN574484 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01300"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01300] In method org.apache.kafka.controller.ReplicationControlManager.maybeBalancePartitionLeaders@POLYN574484 the MagicNumber/String  'Skipping unknown imbalanced topic {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01305"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01305] In method org.apache.kafka.controller.ReplicationControlManager.maybeBalancePartitionLeaders@POLYN574484 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01306"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01306] In method org.apache.kafka.controller.ReplicationControlManager.maybeBalancePartitionLeaders@POLYN574484 the MagicNumber/String  'Skipping unknown imbalanced partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01325"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1325"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01325] For method createPartitions arguments List&lt;CreatePartitionsTopic &gt;  topics"
}} 
,
{ "ligne" : {
   "c1" : "01330"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01330] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01333"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01333] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01335"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01335] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01336"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01336] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN576140 the MagicNumber/String  'Unexpected createPartitions error for {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01347"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1347"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01347] For method createPartitions arguments CreatePartitionsTopic  topic|List&lt;ApiMessageAndVersion &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "01347"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1347"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01347] For method createPartitions list of called methods Object monObjet|org.apache.kafka.metadata.placement.ReplicaPlacer clusterControl_replicaPlacerN581670"
}} 
,
{ "ligne" : {
   "c1" : "01347"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1347"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01347] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01348"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1348"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01348] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01393"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01393] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01397"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01397] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01416"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01416] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01417"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01417] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01350"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01350] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01354"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01354] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01358"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01358] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  'Topic already has ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01359"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01359] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  ' partition(s).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01361"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01361] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  'The topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01361"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01361] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  ' currently ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01362"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01362] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  'has ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01362"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01362] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  ' partition(s); ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01363"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01363] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  ' would not be an increase.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01366"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01366] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01368"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01368] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  'Attempted to add ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01369"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01369] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  ' additional partition(s), but only ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01370"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01370] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  ' assignment(s) were specified.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01375"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01375] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  'Invalid state: topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01376"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01376] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  ' appears to have no partitions.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01380"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01380] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  'Invalid replication factor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01381"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01381] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  ': expected a number equal to less than ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01389"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01389] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01392"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01392] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01401"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01401] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  'All brokers specified in the manual partition assignment for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01402"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01402] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  'partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01402"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01402] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  ' are fenced or in controlled shutdown.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01415"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01415] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01424"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01424] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  'Unable to replicate the partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01425"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01425] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  ' time(s): All brokers are currently fenced or in controlled shutdown.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01435"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01435] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01436"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01436] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01437"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01437] In method org.apache.kafka.controller.ReplicationControlManager.createPartitions@POLYN577453 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01442"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1442"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01442] For method validateManualPartitionAssignment arguments List&lt;Integer &gt;  assignment|OptionalInt  replicationFactor"
}} 
,
{ "ligne" : {
   "c1" : "01442"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1442"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01442] The argument assignment is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01443"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1443"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01443] The argument replicationFactor is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01445"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01445] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  'The manual partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01446"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01446] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  'assignment includes an empty replica list.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01450"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01450] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01453"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1453"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01453] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  'The manual partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01454"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01454] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  'assignment includes broker ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01454"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01454] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  ', but no such broker is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01455"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1455"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01455] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  'registered.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01458"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01458] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  'The manual partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01459"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01459] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  'assignment includes the broker ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01459"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01459] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  ' more than ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01460"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01460] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  'once.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01466"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1466"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01466] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  'The manual partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01467"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1467"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01467] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  'assignment includes a partition with ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01468"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01468] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  ' replica(s), but this is not consistent with previous ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01469"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01469] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  'partitions, which have ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01469"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01469] In method org.apache.kafka.controller.ReplicationControlManager.validateManualPartitionAssignment@POLYN583410 the MagicNumber/String  ' replica(s).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01474"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1474"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01474] For method generateLeaderAndIsrUpdates arguments String  context|int  brokerToRemove|int  brokerToAdd|List&lt;ApiMessageAndVersion &gt;  records|Iterator&lt;TopicIdPartition &gt;  iterator"
}} 
,
{ "ligne" : {
   "c1" : "01477"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1477"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01477] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01478"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1478"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01478] The argument iterator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01497"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1497"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01497] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01498"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01498] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01503"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01503] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01508"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1508"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01508] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01530"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1530"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01530] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01531"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01531] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01531"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01531] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01499"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01499] In method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01500"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01500] In method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String  'Topic ID ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01501"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01501] In method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String  ' existed in isrMembers, but not in the topics map.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01504"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01504] In method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01505"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01505] In method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String  'Partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01506"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01506] In method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String  ' existed in isrMembers, but not in the partitions map.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01527"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1527"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01527] In method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01532"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1532"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01532] In method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01534"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1534"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01534] In method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01536"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1536"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01536] In method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String  '{}: changing partition(s): {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01538"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1538"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01538] In method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String  '{}: changing {} partition(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01543"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1543"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01543] For method alterPartitionReassignments arguments AlterPartitionReassignmentsRequestData  request"
}} 
,
{ "ligne" : {
   "c1" : "01544"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1544"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01544] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01550"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1550"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01550] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01552"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1552"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01552] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01553"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01553] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01557"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01557] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01553"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01553] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01557"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01557] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01547"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01547] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01548"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1548"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01548] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01548"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1548"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01548] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01558"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1558"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01558] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String  'Unable to alter partition reassignment for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01559"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1559"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01559] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01559"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1559"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01559] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String  ' because ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01560"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01560] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String  'of an ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01560"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01560] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String  ' error: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01571"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1571"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01571] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String  'Successfully altered {} out of {} partition reassignment(s).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01576"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1576"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01576] For method alterPartitionReassignment arguments String  topicName|ReassignablePartition  target|List&lt;ApiMessageAndVersion &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "01576"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1576"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01576] For method alterPartitionReassignment list of called methods Object monObjet|java.util.Optional&lt;org.apache.kafka.server.common.ApiMessageAndVersion&gt; cancelPartitionReassignmentN592443|java.util.Optional&lt;org.apache.kafka.server.common.ApiMessageAndVersion&gt; changePartitionReassignmentN592591"
}} 
,
{ "ligne" : {
   "c1" : "01577"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1577"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01577] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01580"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01580] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01581"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1581"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01581] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  'Unable to find a topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01582"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01582] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  'named ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01582"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01582] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01585"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1585"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01585] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01586"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01586] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  'Unable to find a topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01587"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01587] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  'with ID ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01587"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01587] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01591"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1591"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01591] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01592"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1592"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01592] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  'Unable to find partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01593"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1593"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01593] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01593"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1593"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01593] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01596"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01596] In method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignment@POLYN590993 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01604"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1604"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01604] For method cancelPartitionReassignment arguments String  topicName|TopicIdPartition  tp|PartitionRegistration  part"
}} 
,
{ "ligne" : {
   "c1" : "01605"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1605"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01605] The argument tp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01606"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1606"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01606] The argument part is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01613"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1613"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01613] In method org.apache.kafka.controller.ReplicationControlManager.cancelPartitionReassignment@POLYN592801 the MagicNumber/String  'Unable to revert partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01614"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01614] In method org.apache.kafka.controller.ReplicationControlManager.cancelPartitionReassignment@POLYN592801 the MagicNumber/String  'assignment for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01614"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01614] In method org.apache.kafka.controller.ReplicationControlManager.cancelPartitionReassignment@POLYN592801 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01614"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01614] In method org.apache.kafka.controller.ReplicationControlManager.cancelPartitionReassignment@POLYN592801 the MagicNumber/String  ' because ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01615"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1615"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01615] In method org.apache.kafka.controller.ReplicationControlManager.cancelPartitionReassignment@POLYN592801 the MagicNumber/String  'it would require an unclean leader election.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01634"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1634"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01634] For method changePartitionReassignment arguments TopicIdPartition  tp|PartitionRegistration  part|ReassignablePartition  target"
}} 
,
{ "ligne" : {
   "c1" : "01634"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1634"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01634] For method changePartitionReassignment list of called methods Object monObjet|java.util.List&lt;Integer&gt; Replicas_toListN595453"
}} 
,
{ "ligne" : {
   "c1" : "01634"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1634"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01634] The argument tp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01635"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1635"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01635] The argument part is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01636"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1636"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01636] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01660"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1660"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01660] For method listPartitionReassignments arguments List&lt;ListPartitionReassignmentsTopics &gt;  topicList"
}} 
,
{ "ligne" : {
   "c1" : "01672"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1672"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01672] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01663"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1663"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01663] In method org.apache.kafka.controller.ReplicationControlManager.listPartitionReassignments@POLYN596584 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01664"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1664"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01664] In method org.apache.kafka.controller.ReplicationControlManager.listPartitionReassignments@POLYN596584 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01673"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1673"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01673] In method org.apache.kafka.controller.ReplicationControlManager.listPartitionReassignments@POLYN596584 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01681"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1681"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01681] For method listReassigningTopic arguments ListPartitionReassignmentsResponseData  response|Uuid  topicId|List&lt;Integer &gt;  partitionIds"
}} 
,
{ "ligne" : {
   "c1" : "01681"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1681"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01681] For method listReassigningTopic list of called methods Object monObjet|java.util.Optional&lt;OngoingPartitionReassignment&gt; getOngoingPartitionReassignmentN598181"
}} 
,
{ "ligne" : {
   "c1" : "01681"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1681"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01681] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01689"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1689"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01689] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01685"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1685"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01685] In method org.apache.kafka.controller.ReplicationControlManager.listReassigningTopic@POLYN597635 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01700"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1700"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01700] For method getOngoingPartitionReassignment arguments TopicControlInfo  topicInfo|int  partitionId"
}} 
,
{ "ligne" : {
   "c1" : "01701"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1701"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01701] The argument topicInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01703"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01703] In method org.apache.kafka.controller.ReplicationControlManager.getOngoingPartitionReassignment@POLYN598666 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01713"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1713"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01713] The class ReplicationControlIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01742"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1742"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01742] For method iterator arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433"
}} 
,
{ "ligne" : {
   "c1" : "01547"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1547"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01547] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01548"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1548"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01548] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01548"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1548"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01548] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01558"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01558] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String 'Unable to alter partition reassignment for ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01559"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1559"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01559] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String ' because ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01559"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1559"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01559] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String ':' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01560"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1560"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01560] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String ' error: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01560"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1560"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01560] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String 'of an ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01571"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1571"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01571] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartitionReassignments@POLYN588896 the MagicNumber/String 'Successfully altered {} out of {} partition reassignment-s-.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00504] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String '' already exists.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00504] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String 'Topic '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00511] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#537"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00537] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00540"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#540"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00540] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00545"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#545"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00545] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String ': ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#546"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00546] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String ' -' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#546"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00546] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#547"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00547] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00552"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#552"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00552] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String ': ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#553"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00553] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String 'SUCCESS' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00554"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00554] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00557"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00557] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String 'Validate-only CreateTopics result-s-: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00560"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#560"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00560] In the recursive method org.apache.kafka.controller.ReplicationControlManager.createTopics@POLYN525388 the MagicNumber/String 'CreateTopics result-s-: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00869"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#869"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00869] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00870"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#870"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00870] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00871"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#871"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00871] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00877"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#877"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00877] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String 'Rejecting AlterPartition request for unknown topic ID {} or name {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00924"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#924"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00924] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String 'Node {} has altered ISR for {}-{} to {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00941"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#941"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00941] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00942"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#942"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00942] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String 'AlterPartition request from node {} for {}-{} completed ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00943"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#943"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00943] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String 'the ongoing partition reassignment and triggered a ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00944"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00944] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String 'leadership change. Returning {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00950"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#950"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00950] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00951"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#951"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00951] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00952"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#952"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00952] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String 'AlterPartition request from node {} for {}-{} completed ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00953"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#953"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00953] In the recursive method org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN549527 the MagicNumber/String 'the ongoing partition reassignment.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01499"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01499] In the recursive method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01500"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1500"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01500] In the recursive method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String 'Topic ID ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01501"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1501"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01501] In the recursive method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String ' existed in isrMembers, but not in the topics map.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01504"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01504] In the recursive method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01505"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1505"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01505] In the recursive method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String 'Partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01506"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1506"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01506] In the recursive method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String ' existed in isrMembers, but not in the partitions map.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01527"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1527"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01527] In the recursive method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01532"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1532"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01532] In the recursive method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01534"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1534"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01534] In the recursive method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01536"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1536"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01536] In the recursive method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String '{}: changing partition-s-: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01538"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ReplicationControlManager.java.html#1538"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01538] In the recursive method org.apache.kafka.controller.ReplicationControlManager.generateLeaderAndIsrUpdates@POLYN585433 the MagicNumber/String '{}: changing {} partition-s-' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
