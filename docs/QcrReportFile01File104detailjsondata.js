console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java 880 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AdminClient"
 , "c2" : "org.apache.kafka.clients.admin.KafkaAdminClient"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.KafkaAdminClient" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "int"
 , "c2" : "calcTimeoutMsRemainingAsInt(long;long)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "generateClientId(AdminClientConfig)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "calcDeadlineMs(long;Integer)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "prettyPrintException(Throwable)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KafkaAdminClient"
 , "c2" : "createInternal(AdminClientConfig;TimeoutProcessorFactory)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaAdminClient"
 , "c2" : "createInternal(AdminClientConfig;TimeoutProcessorFactory;HostResolver)"
 , "c3" : "1"
 , "c4" : "29"
}} 
,
{ "ligne" : {
   "c1" : "KafkaAdminClient"
 , "c2" : "createInternal(AdminClientConfig;AdminMetadataManager;KafkaClient;Time)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "LogContext"
 , "c2" : "createLogContext(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaAdminClient"
 , "c2" : "KafkaAdminClient(AdminClientConfig;String;Time;AdminMetadataManager;Metrics;KafkaClient;TimeoutProcessorFactory;LogContext)"
 , "c3" : "1"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "configureDefaultApiTimeoutMs(AdminClientConfig)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close(Duration)"
 , "c3" : "9"
 , "c4" : "20"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "topicNameIsUnrepresentable(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "topicIdIsUnrepresentable(Uuid)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "numPendingCalls()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CreateTopicsResult"
 , "c2" : "createTopics(Collection<NewTopic>;CreateTopicsOptions)"
 , "c3" : "6"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "Call"
 , "c2" : "getCreateTopicsCall(CreateTopicsOptions;Map<String,KafkaFutureImpl<TopicMetadataAndConfig>>;CreatableTopicCollection;Map<String,ThrottlingQuotaExceededException>;long;long)"
 , "c3" : "16"
 , "c4" : "28"
}} 
,
{ "ligne" : {
   "c1" : "DeleteTopicsResult"
 , "c2" : "deleteTopics(TopicCollection;DeleteTopicsOptions)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,KafkaFuture<Void>>"
 , "c2" : "handleDeleteTopicsUsingNames(Collection<String>;DeleteTopicsOptions)"
 , "c3" : "6"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "Map<Uuid,KafkaFuture<Void>>"
 , "c2" : "handleDeleteTopicsUsingIds(Collection<Uuid>;DeleteTopicsOptions)"
 , "c3" : "6"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "Call"
 , "c2" : "getDeleteTopicsCall(DeleteTopicsOptions;Map<String,KafkaFutureImpl<Void>>;List<String>;Map<String,ThrottlingQuotaExceededException>;long;long)"
 , "c3" : "12"
 , "c4" : "21"
}} 
,
{ "ligne" : {
   "c1" : "Call"
 , "c2" : "getDeleteTopicsWithIdsCall(DeleteTopicsOptions;Map<Uuid,KafkaFutureImpl<Void>>;List<Uuid>;Map<Uuid,ThrottlingQuotaExceededException>;long;long)"
 , "c3" : "12"
 , "c4" : "21"
}} 
,
{ "ligne" : {
   "c1" : "ListTopicsResult"
 , "c2" : "listTopics(ListTopicsOptions)"
 , "c3" : "3"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "DescribeTopicsResult"
 , "c2" : "describeTopics(TopicCollection;DescribeTopicsOptions)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,KafkaFuture<TopicDescription>>"
 , "c2" : "handleDescribeTopicsByNames(Collection<String>;DescribeTopicsOptions)"
 , "c3" : "12"
 , "c4" : "32"
}} 
,
{ "ligne" : {
   "c1" : "Map<Uuid,KafkaFuture<TopicDescription>>"
 , "c2" : "handleDescribeTopicsByIds(Collection<Uuid>;DescribeTopicsOptions)"
 , "c3" : "9"
 , "c4" : "27"
}} 
,
{ "ligne" : {
   "c1" : "TopicDescription"
 , "c2" : "getTopicDescriptionFromCluster(Cluster;String;Uuid;Integer)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "Node"
 , "c2" : "leader(PartitionInfo)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "DescribeClusterResult"
 , "c2" : "describeCluster(DescribeClusterOptions)"
 , "c3" : "8"
 , "c4" : "34"
}} 
,
{ "ligne" : {
   "c1" : "DescribeAclsResult"
 , "c2" : "describeAcls(AclBindingFilter;DescribeAclsOptions)"
 , "c3" : "4"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "CreateAclsResult"
 , "c2" : "createAcls(Collection<AclBinding>;CreateAclsOptions)"
 , "c3" : "10"
 , "c4" : "25"
}} 
,
{ "ligne" : {
   "c1" : "DeleteAclsResult"
 , "c2" : "deleteAcls(Collection<AclBindingFilter>;DeleteAclsOptions)"
 , "c3" : "9"
 , "c4" : "25"
}} 
,
{ "ligne" : {
   "c1" : "DescribeConfigsResult"
 , "c2" : "describeConfigs(Collection<ConfigResource>;DescribeConfigsOptions)"
 , "c3" : "11"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "Config"
 , "c2" : "describeConfigResult(DescribeConfigsResponseData.DescribeConfigsResult)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConfigEntry.ConfigSource"
 , "c2" : "configSource(DescribeConfigsResponse.ConfigSource)"
 , "c3" : "7"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "AlterConfigsResult"
 , "c2" : "alterConfigs(Map<ConfigResource,Config>;AlterConfigsOptions)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Map<ConfigResource,KafkaFutureImpl<Void>>"
 , "c2" : "alterConfigs(Map<ConfigResource,Config>;AlterConfigsOptions;Collection<ConfigResource>;NodeProvider)"
 , "c3" : "6"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "AlterConfigsResult"
 , "c2" : "incrementalAlterConfigs(Map<ConfigResource,Collection<AlterConfigOp>>;AlterConfigsOptions)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Map<ConfigResource,KafkaFutureImpl<Void>>"
 , "c2" : "incrementalAlterConfigs(Map<ConfigResource,Collection<AlterConfigOp>>;AlterConfigsOptions;Collection<ConfigResource>;NodeProvider)"
 , "c3" : "5"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "AlterReplicaLogDirsResult"
 , "c2" : "alterReplicaLogDirs(Map<TopicPartitionReplica,String>;AlterReplicaLogDirsOptions)"
 , "c3" : "12"
 , "c4" : "29"
}} 
,
{ "ligne" : {
   "c1" : "DescribeLogDirsResult"
 , "c2" : "describeLogDirs(Collection<Integer>;DescribeLogDirsOptions)"
 , "c3" : "4"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,LogDirDescription>"
 , "c2" : "logDirDescriptions(DescribeLogDirsResponse)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "DescribeReplicaLogDirsResult"
 , "c2" : "describeReplicaLogDirs(Collection<TopicPartitionReplica>;DescribeReplicaLogDirsOptions)"
 , "c3" : "17"
 , "c4" : "33"
}} 
,
{ "ligne" : {
   "c1" : "CreatePartitionsResult"
 , "c2" : "createPartitions(Map<String,NewPartitions>;CreatePartitionsOptions)"
 , "c3" : "3"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "Call"
 , "c2" : "getCreatePartitionsCall(CreatePartitionsOptions;Map<String,KafkaFutureImpl<Void>>;CreatePartitionsTopicCollection;Map<String,ThrottlingQuotaExceededException>;long;long)"
 , "c3" : "12"
 , "c4" : "21"
}} 
,
{ "ligne" : {
   "c1" : "DeleteRecordsResult"
 , "c2" : "deleteRecords(Map<TopicPartition,RecordsToDelete>;DeleteRecordsOptions)"
 , "c3" : "14"
 , "c4" : "36"
}} 
,
{ "ligne" : {
   "c1" : "CreateDelegationTokenResult"
 , "c2" : "createDelegationToken(CreateDelegationTokenOptions)"
 , "c3" : "4"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "RenewDelegationTokenResult"
 , "c2" : "renewDelegationToken(byte[];RenewDelegationTokenOptions)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "ExpireDelegationTokenResult"
 , "c2" : "expireDelegationToken(byte[];ExpireDelegationTokenOptions)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "DescribeDelegationTokenResult"
 , "c2" : "describeDelegationToken(DescribeDelegationTokenOptions)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "rescheduleMetadataTask(MetadataOperationContext<?,?>;Supplier<List<Call>>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "DescribeConsumerGroupsResult"
 , "c2" : "describeConsumerGroups(Collection<String>;DescribeConsumerGroupsOptions)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Set<AclOperation>"
 , "c2" : "validAclOperations(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ListConsumerGroupsResult"
 , "c2" : "listConsumerGroups(ListConsumerGroupsOptions)"
 , "c3" : "9"
 , "c4" : "30"
}} 
,
{ "ligne" : {
   "c1" : "ListConsumerGroupOffsetsResult"
 , "c2" : "listConsumerGroupOffsets(String;ListConsumerGroupOffsetsOptions)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "DeleteConsumerGroupsResult"
 , "c2" : "deleteConsumerGroups(Collection<String>;DeleteConsumerGroupsOptions)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "DeleteConsumerGroupOffsetsResult"
 , "c2" : "deleteConsumerGroupOffsets(String;Set<TopicPartition>;DeleteConsumerGroupOffsetsOptions)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Map<MetricName,?extendsMetric>"
 , "c2" : "metrics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ElectLeadersResult"
 , "c2" : "electLeaders(ElectionType;Set<TopicPartition>;ElectLeadersOptions)"
 , "c3" : "2"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "AlterPartitionReassignmentsResult"
 , "c2" : "alterPartitionReassignments(Map<TopicPartition,Optional<NewPartitionReassignment>>;AlterPartitionReassignmentsOptions)"
 , "c3" : "23"
 , "c4" : "58"
}} 
,
{ "ligne" : {
   "c1" : "ListPartitionReassignmentsResult"
 , "c2" : "listPartitionReassignments(Optional<Set<TopicPartition>>;ListPartitionReassignmentsOptions)"
 , "c3" : "14"
 , "c4" : "28"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleNotControllerError(AbstractResponse)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleNotControllerError(Errors)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Integer"
 , "c2" : "nodeFor(ConfigResource)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "List<MemberIdentity>"
 , "c2" : "getMembersFromGroup(String;String)"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "RemoveMembersFromConsumerGroupResult"
 , "c2" : "removeMembersFromConsumerGroup(String;RemoveMembersFromConsumerGroupOptions)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "AlterConsumerGroupOffsetsResult"
 , "c2" : "alterConsumerGroupOffsets(String;Map<TopicPartition,OffsetAndMetadata>;AlterConsumerGroupOffsetsOptions)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ListOffsetsResult"
 , "c2" : "listOffsets(Map<TopicPartition,OffsetSpec>;ListOffsetsOptions)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "List<Call>"
 , "c2" : "getListOffsetsCalls(MetadataOperationContext<ListOffsetsResultInfo,ListOffsetsOptions>;Map<TopicPartition,OffsetSpec>;Map<TopicPartition,KafkaFutureImpl<ListOffsetsResultInfo>>)"
 , "c3" : "26"
 , "c4" : "50"
}} 
,
{ "ligne" : {
   "c1" : "DescribeClientQuotasResult"
 , "c2" : "describeClientQuotas(ClientQuotaFilter;DescribeClientQuotasOptions)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "AlterClientQuotasResult"
 , "c2" : "alterClientQuotas(Collection<ClientQuotaAlteration>;AlterClientQuotasOptions)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "DescribeUserScramCredentialsResult"
 , "c2" : "describeUserScramCredentials(List<String>;DescribeUserScramCredentialsOptions)"
 , "c3" : "6"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "AlterUserScramCredentialsResult"
 , "c2" : "alterUserScramCredentials(List<UserScramCredentialAlteration>;AlterUserScramCredentialsOptions)"
 , "c3" : "17"
 , "c4" : "42"
}} 
,
{ "ligne" : {
   "c1" : "AlterUserScramCredentialsRequestData.ScramCredentialUpsertion"
 , "c2" : "getScramCredentialUpsertion(UserScramCredentialUpsertion)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "AlterUserScramCredentialsRequestData.ScramCredentialDeletion"
 , "c2" : "getScramCredentialDeletion(UserScramCredentialDeletion)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "getSaltedPasword(ScramMechanism;byte[];byte[];int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "DescribeFeaturesResult"
 , "c2" : "describeFeatures(DescribeFeaturesOptions)"
 , "c3" : "7"
 , "c4" : "18"
}} 
,
{ "ligne" : {
   "c1" : "UpdateFeaturesResult"
 , "c2" : "updateFeatures(Map<String,FeatureUpdate>;UpdateFeaturesOptions)"
 , "c3" : "13"
 , "c4" : "32"
}} 
,
{ "ligne" : {
   "c1" : "DescribeMetadataQuorumResult"
 , "c2" : "describeMetadataQuorum(DescribeMetadataQuorumOptions)"
 , "c3" : "7"
 , "c4" : "28"
}} 
,
{ "ligne" : {
   "c1" : "UnregisterBrokerResult"
 , "c2" : "unregisterBroker(int;UnregisterBrokerOptions)"
 , "c3" : "3"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "DescribeProducersResult"
 , "c2" : "describeProducers(Collection<TopicPartition>;DescribeProducersOptions)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "DescribeTransactionsResult"
 , "c2" : "describeTransactions(Collection<String>;DescribeTransactionsOptions)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "AbortTransactionResult"
 , "c2" : "abortTransaction(AbortTransactionSpec;AbortTransactionOptions)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ListTransactionsResult"
 , "c2" : "listTransactions(ListTransactionsOptions)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "FenceProducersResult"
 , "c2" : "fenceProducers(Collection<String>;FenceProducersOptions)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "getOffsetFromOffsetSpec(OffsetSpec)"
 , "c3" : "6"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.svg" }

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
 , "c4" : "29"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "123"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "150"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "391"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "109"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "52"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#333"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00333] The argument map is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#338"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00338] The argument futures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#343"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00343] The argument futures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#348"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00348] For method calcTimeoutMsRemainingAsInt arguments long  now|long  deadlineMs"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#358"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00358] For method generateClientId arguments AdminClientConfig  config"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#358"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00358] For method generateClientId list of called methods Object monObjet|String config_getStringN984870"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#358"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00358] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.clients.admin.KafkaAdminClient.generateClientId@POLYN984773 the MagicNumber/String  'adminclient-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#366"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00366] For method calcDeadlineMs arguments long  now|Integer  optionTimeoutMs"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.clients.admin.KafkaAdminClient.calcDeadlineMs@POLYN985278 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.clients.admin.KafkaAdminClient.calcDeadlineMs@POLYN985278 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#373"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00373] For method prettyPrintException arguments Throwable  throwable"
}} 
,
{ "ligne" : {
   "c1" : "00374"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.clients.admin.KafkaAdminClient.prettyPrintException@POLYN985716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.clients.admin.KafkaAdminClient.prettyPrintException@POLYN985716 the MagicNumber/String  'Null exception.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.clients.admin.KafkaAdminClient.prettyPrintException@POLYN985716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.clients.admin.KafkaAdminClient.prettyPrintException@POLYN985716 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#382"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00382] For method createInternal arguments AdminClientConfig  config|TimeoutProcessorFactory  timeoutProcessorFactory"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986192 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00386] For method createInternal arguments AdminClientConfig  config|TimeoutProcessorFactory  timeoutProcessorFactory|HostResolver  hostResolver"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00386] For method createInternal list of called methods Object monObjet|String generateClientIdN986726|org.apache.kafka.common.utils.LogContext createLogContextN987000"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#386"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00386] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  'client-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  'admin-client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00435] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00441] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  'Metrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  'NetworkClient' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#449"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00449] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  'Selector' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  'ChannelBuilder' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00451"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00451] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN986402 the MagicNumber/String  'Failed to create new KafkaAdminClient' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#455"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00455] For method createInternal arguments AdminClientConfig  config|AdminMetadataManager  metadataManager|KafkaClient  client|Time  time"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#455"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00455] For method createInternal list of called methods Object monObjet|String generateClientIdN991444"
}} 
,
{ "ligne" : {
   "c1" : "00459"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00459] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN991215 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00466"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#466"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00466] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN991215 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN991215 the MagicNumber/String  'Metrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00469"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00469] In method org.apache.kafka.clients.admin.KafkaAdminClient.createInternal@POLYN991215 the MagicNumber/String  'Failed to create new KafkaAdminClient' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#473"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00473] For method createLogContext arguments String  clientId"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.clients.admin.KafkaAdminClient.createLogContext@POLYN992255 the MagicNumber/String  '[AdminClient clientId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.clients.admin.KafkaAdminClient.createLogContext@POLYN992255 the MagicNumber/String  '] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#477"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00477] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#479"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00479] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#484"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00484] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00495] In method org.apache.kafka.clients.admin.KafkaAdminClient.KafkaAdminClient@POLYN992438 the MagicNumber/String  ' | ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.clients.admin.KafkaAdminClient.KafkaAdminClient@POLYN992438 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00497"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#497"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00497] In method org.apache.kafka.clients.admin.KafkaAdminClient.KafkaAdminClient@POLYN992438 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00503] In method org.apache.kafka.clients.admin.KafkaAdminClient.KafkaAdminClient@POLYN992438 the MagicNumber/String  'Kafka admin client initialized' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#508"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00508] For method configureDefaultApiTimeoutMs arguments AdminClientConfig  config"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#508"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00508] For method configureDefaultApiTimeoutMs list of called methods Object monObjet|int config_getIntN994829|int config_getIntN994931"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#508"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00508] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00514] In method org.apache.kafka.clients.admin.KafkaAdminClient.configureDefaultApiTimeoutMs@POLYN994732 the MagicNumber/String  'The specified value of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#515"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00515] In method org.apache.kafka.clients.admin.KafkaAdminClient.configureDefaultApiTimeoutMs@POLYN994732 the MagicNumber/String  ' must be no smaller than the value of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#515"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00515] In method org.apache.kafka.clients.admin.KafkaAdminClient.configureDefaultApiTimeoutMs@POLYN994732 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#517"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00517] In method org.apache.kafka.clients.admin.KafkaAdminClient.configureDefaultApiTimeoutMs@POLYN994732 the MagicNumber/String  'Overriding the default value for {} ({}) with the explicitly configured request timeout {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00527"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#527"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00527] For method close arguments Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00527"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#527"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00527] The argument timeout is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00530"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#530"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00530] In method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String  'The timeout cannot be negative.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String  365 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#535"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00535] In method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00538"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#538"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00538] In method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String  'Initiating close operation.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00540"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#540"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00540] In method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String  'Moving hard shutdown time forward.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00547] In method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String  'Hard shutdown time is already earlier than requested.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00553] In method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00554"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#554"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00554] In method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String  'Waiting for the I/O thread to exit. Hard shutdown in {} ms.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00563] In method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String  'Kafka admin client closed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#565"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00565] In method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String  'Interrupted while joining I/O thread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00575"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00575] The class MetadataUpdateNodeIdProvider contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00582"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00582] The class ConstantNodeIdProvider contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00592"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#592"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00592] In method org.apache.kafka.clients.admin.KafkaAdminClient.ConstantNodeIdProvider.provide@POLYN998398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.clients.admin.KafkaAdminClient.ConstantNodeIdProvider.provide@POLYN998398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00605"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#605"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00605] The class ControllerNodeProvider contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00609"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#609"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00609] In method org.apache.kafka.clients.admin.KafkaAdminClient.ControllerNodeProvider.provide@POLYN998887 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00613"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#613"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00613] In method org.apache.kafka.clients.admin.KafkaAdminClient.ControllerNodeProvider.provide@POLYN998887 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00618] The class LeastLoadedNodeProvider contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#627"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00627] In method org.apache.kafka.clients.admin.KafkaAdminClient.LeastLoadedNodeProvider.provide@POLYN999341 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00631"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#631"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00631] The class Call contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00656"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#656"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00656] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.Call@POLYN1000556 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00656"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#656"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00656] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.Call@POLYN1000556 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00660"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#660"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00660] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.Call@POLYN1000857 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00660"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#660"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00660] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.Call@POLYN1000857 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00660"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#660"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00660] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.Call@POLYN1000857 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00664"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#664"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00664] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.Call@POLYN1001135 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00672"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#672"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00672] For method fail arguments long  now|Throwable  throwable"
}} 
,
{ "ligne" : {
   "c1" : "00673"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#673"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00673] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.fail@POLYN1001825 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00675] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.fail@POLYN1001825 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00687"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#687"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00687] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.fail@POLYN1001825 the MagicNumber/String  '{} attempting protocol downgrade and then retry.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00695"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#695"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00695] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.fail@POLYN1001825 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.fail@POLYN1001825 the MagicNumber/String  '{} failed with non-retriable exception after {} attempt(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00714"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#714"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00714] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.fail@POLYN1001825 the MagicNumber/String  '{} failed: {}. Beginning retry #{}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00720"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#720"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00720] For method maybeRetry arguments long  now|Throwable  throwable"
}} 
,
{ "ligne" : {
   "c1" : "00724"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#724"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00724] For method handleTimeoutFailure arguments long  now|Throwable  cause"
}} 
,
{ "ligne" : {
   "c1" : "00726"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#726"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00726] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.handleTimeoutFailure@POLYN1004060 the MagicNumber/String  '{} timed out at {} after {} attempt(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00732"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#732"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00732] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.handleTimeoutFailure@POLYN1004060 the MagicNumber/String  ' timed out at ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#733"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00733] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.handleTimeoutFailure@POLYN1004060 the MagicNumber/String  ' after ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#733"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00733] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.handleTimeoutFailure@POLYN1004060 the MagicNumber/String  ' attempt(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00738"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#738"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00738] For method createRequest arguments int  timeoutMs"
}} 
,
{ "ligne" : {
   "c1" : "00741"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#741"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00741] For method handleResponse arguments AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {
   "c1" : "00744"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#744"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00744] For method handleFailure arguments Throwable  throwable"
}} 
,
{ "ligne" : {
   "c1" : "00747"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#747"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00747] For method handleUnsupportedVersionException arguments UnsupportedVersionException  exception"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#748"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00748] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.handleUnsupportedVersionException@POLYN1005460 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00753"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#753"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00753] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.toString@POLYN1005584 the MagicNumber/String  'Call(callName=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00753"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#753"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00753] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.toString@POLYN1005584 the MagicNumber/String  ', deadlineMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00754"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00754] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.toString@POLYN1005584 the MagicNumber/String  ', tries=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00754"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00754] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.toString@POLYN1005584 the MagicNumber/String  ', nextAllowedTryMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00754"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00754] In method org.apache.kafka.clients.admin.KafkaAdminClient.Call.toString@POLYN1005584 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00762"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#762"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00762] The class TimeoutProcessorFactory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00763"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#763"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00763] For method create arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00768"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#768"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00768] The class TimeoutProcessor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00782"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#782"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00782] For method handleTimeouts arguments Collection&lt;Call &gt;  calls|String  msg"
}} 
,
{ "ligne" : {
   "c1" : "00782"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#782"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00782] For method handleTimeouts list of called methods Object monObjet|int calcTimeoutMsRemainingAsIntN1007235"
}} 
,
{ "ligne" : {
   "c1" : "00782"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#782"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00782] The argument calls is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00785"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#785"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00785] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00783"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#783"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00783] In method org.apache.kafka.clients.admin.KafkaAdminClient.TimeoutProcessor.handleTimeouts@POLYN1006792 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00787"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#787"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00787] In method org.apache.kafka.clients.admin.KafkaAdminClient.TimeoutProcessor.handleTimeouts@POLYN1006792 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00788"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#788"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00788] In method org.apache.kafka.clients.admin.KafkaAdminClient.TimeoutProcessor.handleTimeouts@POLYN1006792 the MagicNumber/String  ' Call: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#799"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00799] For method callHasExpired arguments Call  call"
}} 
,
{ "ligne" : {
   "c1" : "00799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#799"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00799] For method callHasExpired list of called methods Object monObjet|int calcTimeoutMsRemainingAsIntN1008102"
}} 
,
{ "ligne" : {
   "c1" : "00799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#799"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00799] The argument call is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00801"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#801"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00801] In method org.apache.kafka.clients.admin.KafkaAdminClient.TimeoutProcessor.callHasExpired@POLYN1008005 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00802"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#802"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00802] In method org.apache.kafka.clients.admin.KafkaAdminClient.TimeoutProcessor.callHasExpired@POLYN1008005 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00804"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#804"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00804] In method org.apache.kafka.clients.admin.KafkaAdminClient.TimeoutProcessor.callHasExpired@POLYN1008005 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00812"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#812"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00812] The class AdminClientRunnable contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00835"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#835"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00835] For method timeoutPendingCalls arguments TimeoutProcessor  processor"
}} 
,
{ "ligne" : {
   "c1" : "00835"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#835"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00835] For method timeoutPendingCalls list of called methods Object monObjet|int processor_handleTimeoutsN1010174"
}} 
,
{ "ligne" : {
   "c1" : "00835"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#835"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00835] The argument processor is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00836"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#836"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00836] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.timeoutPendingCalls@POLYN1010081 the MagicNumber/String  'Timed out waiting for a node assignment.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00837"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#837"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00837] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.timeoutPendingCalls@POLYN1010081 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00838"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#838"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00838] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.timeoutPendingCalls@POLYN1010081 the MagicNumber/String  'Timed out {} pending calls.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00842"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#842"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00842] For method timeoutCallsToSend arguments TimeoutProcessor  processor"
}} 
,
{ "ligne" : {
   "c1" : "00842"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#842"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00842] For method timeoutCallsToSend list of called methods Object monObjet|int processor_handleTimeoutsN1010774"
}} 
,
{ "ligne" : {
   "c1" : "00842"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#842"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00842] The argument processor is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#843"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00843] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.timeoutCallsToSend@POLYN1010506 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00846"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#846"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00846] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.timeoutCallsToSend@POLYN1010506 the MagicNumber/String  'Timed out waiting to send the call.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00848"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#848"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00848] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.timeoutCallsToSend@POLYN1010506 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00849"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#849"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00849] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.timeoutCallsToSend@POLYN1010506 the MagicNumber/String  'Timed out {} call(s) with assigned nodes.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00854"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#854"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00854] Lock statement on synchronized method drainNewCalls"
}} 
,
{ "ligne" : {
   "c1" : "00859"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#859"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00859] For method transitionToPendingAndClearList arguments List&lt;Call &gt;  calls"
}} 
,
{ "ligne" : {
   "c1" : "00859"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#859"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00859] The argument calls is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00861"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#861"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00861] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.transitionToPendingAndClearList@POLYN1011428 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00868"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#868"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00868] For method maybeDrainPendingCalls arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00874"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#874"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00874] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00870"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#870"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00870] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.maybeDrainPendingCalls@POLYN1011960 the MagicNumber/String  'Trying to choose nodes for {} at {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00886"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#886"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00886] For method maybeDrainPendingCall arguments Call  call|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00886"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#886"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00886] The argument call is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00889"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#889"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00889] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.maybeDrainPendingCall@POLYN1013021 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00890"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#890"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00890] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.maybeDrainPendingCall@POLYN1013021 the MagicNumber/String  'Assigned {} to node {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00893"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00893] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.maybeDrainPendingCall@POLYN1013021 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00895"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#895"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00895] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.maybeDrainPendingCall@POLYN1013021 the MagicNumber/String  'Unable to assign {} to a node.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00896"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#896"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00896] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.maybeDrainPendingCall@POLYN1013021 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00900"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#900"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00900] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.maybeDrainPendingCall@POLYN1013021 the MagicNumber/String  'Unable to choose node for {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00902"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#902"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00902] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.maybeDrainPendingCall@POLYN1013021 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00907"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#907"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00907] For method sendEligibleCalls arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00907"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#907"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00907] For method sendEligibleCalls list of called methods Object monObjet|long client_pollDelayMsN1016463"
}} 
,
{ "ligne" : {
   "c1" : "00910"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#910"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00910] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00911"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#911"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00911] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00916"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#916"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00916] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00923"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#923"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00923] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00947"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#947"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00947] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00954"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#954"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00954] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00957"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#957"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00957] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00960"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#960"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00960] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#965"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00965] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00954"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#954"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00954] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00957"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#957"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00957] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00960"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#960"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00960] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#965"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00965] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00918] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.sendEligibleCalls@POLYN1014202 the MagicNumber/String  'Still waiting for other calls to finish on node {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00924"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#924"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00924] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.sendEligibleCalls@POLYN1014202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00926"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#926"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00926] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.sendEligibleCalls@POLYN1014202 the MagicNumber/String  'Disconnecting from {} and revoking {} node assignment(s) ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00927"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#927"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00927] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.sendEligibleCalls@POLYN1014202 the MagicNumber/String  'because the node is taking too long to become ready.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00941"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#941"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00941] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.sendEligibleCalls@POLYN1014202 the MagicNumber/String  'Client is not ready to send to {}. Must delay {} ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00948"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#948"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00948] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.sendEligibleCalls@POLYN1014202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00954"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#954"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00954] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.sendEligibleCalls@POLYN1014202 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00962"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#962"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00962] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.sendEligibleCalls@POLYN1014202 the MagicNumber/String  'Internal error sending %s to %s.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00966"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#966"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00966] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.sendEligibleCalls@POLYN1014202 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00966"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#966"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00966] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.sendEligibleCalls@POLYN1014202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00967"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#967"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00967] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.sendEligibleCalls@POLYN1014202 the MagicNumber/String  'Sending {} to {}. correlationId={}, timeoutMs={}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00979"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#979"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00979] For method timeoutCallsInFlight arguments TimeoutProcessor  processor"
}} 
,
{ "ligne" : {
   "c1" : "00979"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#979"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00979] The argument processor is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00982] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00983"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#983"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00983] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00980"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#980"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00980] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.timeoutCallsInFlight@POLYN1019033 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00985"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#985"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00985] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.timeoutCallsInFlight@POLYN1019033 the MagicNumber/String  'Disconnecting from {} due to timeout while awaiting {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#993"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00993] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.timeoutCallsInFlight@POLYN1019033 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00994"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#994"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00994] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.timeoutCallsInFlight@POLYN1019033 the MagicNumber/String  'Timed out {} call(s) in flight.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00998"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#998"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00998] For method handleResponses arguments long  now|List&lt;ClientResponse &gt;  responses"
}} 
,
{ "ligne" : {
   "c1" : "01002"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1002"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01002] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1026"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01026] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1039"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01039] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01003"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1003"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01003] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.handleResponses@POLYN1020027 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01006"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1006"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01006] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.handleResponses@POLYN1020027 the MagicNumber/String  'Internal server error on {}: server returned information about unknown ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1007"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01007] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.handleResponses@POLYN1020027 the MagicNumber/String  'correlation ID {}, requestHeader = {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1016"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01016] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.handleResponses@POLYN1020027 the MagicNumber/String  'Internal server error on {}: ignoring call {} in correlationIdToCall ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1017"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01017] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.handleResponses@POLYN1020027 the MagicNumber/String  'that did not exist in callsInFlight' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1023"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01023] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.handleResponses@POLYN1020027 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1027"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01027] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.handleResponses@POLYN1020027 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1031"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01031] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.handleResponses@POLYN1020027 the MagicNumber/String  'Cancelled %s request with correlation id %s due to node %s being disconnected' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1038"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01038] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.handleResponses@POLYN1020027 the MagicNumber/String  '{} got response {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1041"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01041] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.handleResponses@POLYN1020027 the MagicNumber/String  '{} handleResponse failed with {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1049"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01049] For method unassignUnsentCalls arguments Predicate&lt;Node &gt;  shouldUnassign"
}} 
,
{ "ligne" : {
   "c1" : "01049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1049"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01049] The argument shouldUnassign is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1051"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01051] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1052"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01052] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1053"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01053] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1065"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01065] For method hasActiveExternalCalls arguments Collection&lt;Call &gt;  calls"
}} 
,
{ "ligne" : {
   "c1" : "01068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1068"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01068] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.hasActiveExternalCalls@POLYN1023970 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1071"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01071] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.hasActiveExternalCalls@POLYN1023970 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1077"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01077] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.hasActiveExternalCalls@POLYN1024344 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1081"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01081] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.hasActiveExternalCalls@POLYN1024344 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1087"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01087] For method threadShouldExit arguments long  now|long  curHardShutdownTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "01089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1089"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01089] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.threadShouldExit@POLYN1024835 the MagicNumber/String  'All work has been completed, and the I/O thread is now exiting.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1090"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01090] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.threadShouldExit@POLYN1024835 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1093"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01093] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.threadShouldExit@POLYN1024835 the MagicNumber/String  'Forcing a hard I/O thread shutdown. Requests in progress will be aborted.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1094"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01094] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.threadShouldExit@POLYN1024835 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1096"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01096] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.threadShouldExit@POLYN1024835 the MagicNumber/String  'Hard shutdown in {} ms.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1097"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01097] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.threadShouldExit@POLYN1024835 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1111"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01111] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "01102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01102] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.run@POLYN1025456 the MagicNumber/String  'Thread starting' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01106] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.run@POLYN1025456 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01109] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.run@POLYN1025456 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01112] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.run@POLYN1025456 the MagicNumber/String  'The AdminClient thread has exited.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01114] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.run@POLYN1025456 the MagicNumber/String  'The AdminClient thread has exited.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01117] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.run@POLYN1025456 the MagicNumber/String  'The AdminClient thread has exited.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01118] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.run@POLYN1025456 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01119] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.run@POLYN1025456 the MagicNumber/String  'Timed out {} remaining operation(s) during close.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01121] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.run@POLYN1025456 the MagicNumber/String  'KafkaClient' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01122] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.run@POLYN1025456 the MagicNumber/String  'Metrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01123] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.run@POLYN1025456 the MagicNumber/String  'Exiting AdminClientRunnable thread.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01127] For method processRequests list of called methods Object monObjet|long time_millisecondsN1029653"
}} 
,
{ "ligne" : {
   "c1" : "01139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01154] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01173] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01129] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.processRequests@POLYN1026899 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01144] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.processRequests@POLYN1026899 the MagicNumber/String  1200000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01152] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.processRequests@POLYN1026899 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01163] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.processRequests@POLYN1026899 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01172] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.processRequests@POLYN1026899 the MagicNumber/String  'Entering KafkaClient#poll(timeout={})' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01173] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.processRequests@POLYN1026899 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01174] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.processRequests@POLYN1026899 the MagicNumber/String  'KafkaClient#poll retrieved {} response(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01186] For method enqueue arguments Call  call|long  now"
}} 
,
{ "ligne" : {
   "c1" : "01186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1186"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01186] The argument call is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1198"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01198] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "01188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01188] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.enqueue@POLYN1030020 the MagicNumber/String  'Max retries {} for {} reached' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01190] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.enqueue@POLYN1030020 the MagicNumber/String  'Exceeded maxRetries after ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01190] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.enqueue@POLYN1030020 the MagicNumber/String  ' tries.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01194] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.enqueue@POLYN1030020 the MagicNumber/String  'Queueing {} with a timeout {} ms from now.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01197] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.enqueue@POLYN1030020 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01201] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.enqueue@POLYN1030020 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01207] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.enqueue@POLYN1030020 the MagicNumber/String  'The AdminClient thread has exited. Timing out {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01209] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.enqueue@POLYN1030020 the MagicNumber/String  'The AdminClient thread has exited.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1214"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01214] For method call arguments Call  call|long  now"
}} 
,
{ "ligne" : {
   "c1" : "01214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1214"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01214] The argument call is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01216] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.call@POLYN1031617 the MagicNumber/String  'The AdminClient is not accepting new calls. Timing out {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01218] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.call@POLYN1031617 the MagicNumber/String  'The AdminClient thread is not accepting new calls.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01225"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1225"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01225] For method makeMetadataCall arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "01226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01226] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.makeMetadataCall@POLYN1032197 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01226] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.makeMetadataCall@POLYN1032197 the MagicNumber/String  'fetchMetadata' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01235] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.makeMetadataCall@POLYN1032197 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01246] In method org.apache.kafka.clients.admin.KafkaAdminClient.AdminClientRunnable.makeMetadataCall@POLYN1032197 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01258"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1258"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01258] For method topicNameIsUnrepresentable arguments String  topicName"
}} 
,
{ "ligne" : {
   "c1" : "01259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01259] In method org.apache.kafka.clients.admin.KafkaAdminClient.topicNameIsUnrepresentable@POLYN1033560 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1262"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01262] For method topicIdIsUnrepresentable arguments Uuid  topicId"
}} 
,
{ "ligne" : {
   "c1" : "01263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01263] In method org.apache.kafka.clients.admin.KafkaAdminClient.topicIdIsUnrepresentable@POLYN1033739 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1273"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01273] The argument futures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01274"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1274"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01274] The argument messageFormatter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01283"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1283"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01283] The argument futures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1284"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01284] The argument quotaExceededExceptions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01289] In method org.apache.kafka.clients.admin.KafkaAdminClient the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01295"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1295"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01295] For method createTopics arguments Collection&lt;NewTopic &gt;  newTopics|CreateTopicsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "01295"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1295"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01295] For method createTopics list of called methods Object monObjet|long calcDeadlineMsN1037116|org.apache.kafka.clients.admin.KafkaAdminClient.Call getCreateTopicsCallN1037249"
}} 
,
{ "ligne" : {
   "c1" : "01295"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1295"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01295] The argument newTopics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1296"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01296] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01301] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01302] In method org.apache.kafka.clients.admin.KafkaAdminClient.createTopics@POLYN1035614 the MagicNumber/String  'The given topic name '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01303] In method org.apache.kafka.clients.admin.KafkaAdminClient.createTopics@POLYN1035614 the MagicNumber/String  '' cannot be represented in a request.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01320"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1320"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01320] For method getCreateTopicsCall arguments CreateTopicsOptions  options|Map&lt;String ,KafkaFutureImpl&lt;TopicMetadataAndConfig &gt; &gt;  futures|CreatableTopicCollection  topics|Map&lt;String ,ThrottlingQuotaExceededException &gt;  quotaExceededExceptions|long  now|long  deadline"
}} 
,
{ "ligne" : {
   "c1" : "01320"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1320"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01320] For method getCreateTopicsCall list of called methods Object monObjet|org.apache.kafka.clients.admin.KafkaAdminClient.Call time_millisecondsN1041817|org.apache.kafka.clients.admin.KafkaAdminClient.Call getCreateTopicsCallN1041897"
}} 
,
{ "ligne" : {
   "c1" : "01320"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1320"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01320] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01321"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1321"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01321] The argument futures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01322"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1322"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01322] The argument topics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01326"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01326] In method org.apache.kafka.clients.admin.KafkaAdminClient.getCreateTopicsCall@POLYN1037658 the MagicNumber/String  'createTopics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01346"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01346] In method org.apache.kafka.clients.admin.KafkaAdminClient.getCreateTopicsCall@POLYN1037658 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01347"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01347] In method org.apache.kafka.clients.admin.KafkaAdminClient.getCreateTopicsCall@POLYN1037658 the MagicNumber/String  'Server response mentioned unknown topic {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01370"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01370] In method org.apache.kafka.clients.admin.KafkaAdminClient.getCreateTopicsCall@POLYN1037658 the MagicNumber/String  'Topic metadata and configs in CreateTopics response not supported' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01388] In method org.apache.kafka.clients.admin.KafkaAdminClient.getCreateTopicsCall@POLYN1037658 the MagicNumber/String  'The controller response did not contain a result for topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01405] In method org.apache.kafka.clients.admin.KafkaAdminClient.getCreateTopicsCall@POLYN1037658 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01406] In method org.apache.kafka.clients.admin.KafkaAdminClient.getCreateTopicsCall@POLYN1037658 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01422"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1422"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01422] For method deleteTopics arguments TopicCollection  topics|DeleteTopicsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01429] In method org.apache.kafka.clients.admin.KafkaAdminClient.deleteTopics@POLYN1043123 the MagicNumber/String  'The TopicCollection: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01429] In method org.apache.kafka.clients.admin.KafkaAdminClient.deleteTopics@POLYN1043123 the MagicNumber/String  ' provided did not match any supported classes for deleteTopics.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01432"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1432"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01432] For method handleDeleteTopicsUsingNames arguments Collection&lt;String &gt;  topicNames|DeleteTopicsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "01432"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1432"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01432] For method handleDeleteTopicsUsingNames list of called methods Object monObjet|long calcDeadlineMsN1045328|org.apache.kafka.clients.admin.KafkaAdminClient.Call getDeleteTopicsCallN1045461"
}} 
,
{ "ligne" : {
   "c1" : "01432"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1432"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01432] The argument topicNames is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1433"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01433] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01438"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01438] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01439] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDeleteTopicsUsingNames@POLYN1043876 the MagicNumber/String  'The given topic name '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01440] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDeleteTopicsUsingNames@POLYN1043876 the MagicNumber/String  '' cannot be represented in a request.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1457"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01457] For method handleDeleteTopicsUsingIds arguments Collection&lt;Uuid &gt;  topicIds|DeleteTopicsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "01457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1457"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01457] For method handleDeleteTopicsUsingIds list of called methods Object monObjet|long calcDeadlineMsN1047358|org.apache.kafka.clients.admin.KafkaAdminClient.Call getDeleteTopicsWithIdsCallN1047491"
}} 
,
{ "ligne" : {
   "c1" : "01457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1457"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01457] The argument topicIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1458"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01458] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01463] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01464"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1464"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01464] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDeleteTopicsUsingIds@POLYN1045890 the MagicNumber/String  'The given topic ID '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1465"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01465] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDeleteTopicsUsingIds@POLYN1045890 the MagicNumber/String  '' cannot be represented in a request.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01482"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1482"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01482] For method getDeleteTopicsCall arguments DeleteTopicsOptions  options|Map&lt;String ,KafkaFutureImpl&lt;Void &gt; &gt;  futures|List&lt;String &gt;  topics|Map&lt;String ,ThrottlingQuotaExceededException &gt;  quotaExceededExceptions|long  now|long  deadline"
}} 
,
{ "ligne" : {
   "c1" : "01482"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1482"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01482] For method getDeleteTopicsCall list of called methods Object monObjet|org.apache.kafka.clients.admin.KafkaAdminClient.Call time_millisecondsN1050842|org.apache.kafka.clients.admin.KafkaAdminClient.Call getDeleteTopicsCallN1050922"
}} 
,
{ "ligne" : {
   "c1" : "01482"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1482"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01482] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01483"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1483"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01483] The argument futures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01488] In method org.apache.kafka.clients.admin.KafkaAdminClient.getDeleteTopicsCall@POLYN1047862 the MagicNumber/String  'deleteTopics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01507"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1507"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01507] In method org.apache.kafka.clients.admin.KafkaAdminClient.getDeleteTopicsCall@POLYN1047862 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1508"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01508] In method org.apache.kafka.clients.admin.KafkaAdminClient.getDeleteTopicsCall@POLYN1047862 the MagicNumber/String  'Server response mentioned unknown topic {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01525] In method org.apache.kafka.clients.admin.KafkaAdminClient.getDeleteTopicsCall@POLYN1047862 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01533"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01533] In method org.apache.kafka.clients.admin.KafkaAdminClient.getDeleteTopicsCall@POLYN1047862 the MagicNumber/String  'The controller response did not contain a result for topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01554"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1554"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01554] For method getDeleteTopicsWithIdsCall arguments DeleteTopicsOptions  options|Map&lt;Uuid ,KafkaFutureImpl&lt;Void &gt; &gt;  futures|List&lt;Uuid &gt;  topicIds|Map&lt;Uuid ,ThrottlingQuotaExceededException &gt;  quotaExceededExceptions|long  now|long  deadline"
}} 
,
{ "ligne" : {
   "c1" : "01554"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1554"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01554] For method getDeleteTopicsWithIdsCall list of called methods Object monObjet|org.apache.kafka.clients.admin.KafkaAdminClient.Call time_millisecondsN1054804|org.apache.kafka.clients.admin.KafkaAdminClient.Call getDeleteTopicsWithIdsCallN1054884"
}} 
,
{ "ligne" : {
   "c1" : "01554"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1554"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01554] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1555"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01555] The argument futures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01556"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1556"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01556] The argument topicIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01560"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01560] In method org.apache.kafka.clients.admin.KafkaAdminClient.getDeleteTopicsWithIdsCall@POLYN1051632 the MagicNumber/String  'deleteTopics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01580"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01580] In method org.apache.kafka.clients.admin.KafkaAdminClient.getDeleteTopicsWithIdsCall@POLYN1051632 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01581"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1581"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01581] In method org.apache.kafka.clients.admin.KafkaAdminClient.getDeleteTopicsWithIdsCall@POLYN1051632 the MagicNumber/String  'Server response mentioned unknown topic ID {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01598"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1598"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01598] In method org.apache.kafka.clients.admin.KafkaAdminClient.getDeleteTopicsWithIdsCall@POLYN1051632 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01606"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1606"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01606] In method org.apache.kafka.clients.admin.KafkaAdminClient.getDeleteTopicsWithIdsCall@POLYN1051632 the MagicNumber/String  'The controller response did not contain a result for topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1628"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01628] For method listTopics arguments ListTopicsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "01628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1628"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01628] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01631"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1631"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01631] In method org.apache.kafka.clients.admin.KafkaAdminClient.listTopics@POLYN1055608 the MagicNumber/String  'listTopics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01661"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1661"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01661] For method describeTopics arguments TopicCollection  topics|DescribeTopicsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "01667"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1667"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01667] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeTopics@POLYN1057466 the MagicNumber/String  'The TopicCollection: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01667"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1667"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01667] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeTopics@POLYN1057466 the MagicNumber/String  ' provided did not match any supported classes for describeTopics.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1670"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01670] For method handleDescribeTopicsByNames arguments Collection&lt;String &gt;  topicNames|DescribeTopicsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "01670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1670"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01670] For method handleDescribeTopicsByNames list of called methods Object monObjet|java.util.Map&lt;String,KafkaFuture&lt;TopicDescription&gt;&gt; errors_getN1060963|org.apache.kafka.clients.admin.TopicDescription getTopicDescriptionFromClusterN1061737"
}} 
,
{ "ligne" : {
   "c1" : "01670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1670"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01670] The argument topicNames is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1670"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01670] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01675] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01676"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1676"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01676] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByNames@POLYN1058216 the MagicNumber/String  'The given topic name '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01677"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1677"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01677] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByNames@POLYN1058216 the MagicNumber/String  '' cannot be represented in a request.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01685"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1685"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01685] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByNames@POLYN1058216 the MagicNumber/String  'describeTopics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01688"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1688"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01688] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByNames@POLYN1058216 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01695"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1695"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01695] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByNames@POLYN1058216 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1711"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01711] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByNames@POLYN1058216 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01716"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1716"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01716] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByNames@POLYN1058216 the MagicNumber/String  'Topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01716"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1716"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01716] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByNames@POLYN1058216 the MagicNumber/String  ' not found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01729"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1729"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01729] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByNames@POLYN1058216 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01730"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1730"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01730] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByNames@POLYN1058216 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01732"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1732"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01732] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByNames@POLYN1058216 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01746"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1746"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01746] For method handleDescribeTopicsByIds arguments Collection&lt;Uuid &gt;  topicIds|DescribeTopicsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "01746"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1746"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01746] For method handleDescribeTopicsByIds list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.Uuid,KafkaFuture&lt;TopicDescription&gt;&gt; errors_getN1065623|org.apache.kafka.clients.admin.TopicDescription getTopicDescriptionFromClusterN1066012"
}} 
,
{ "ligne" : {
   "c1" : "01746"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1746"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01746] The argument topicIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01746"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1746"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01746] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01752"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1752"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01752] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01753"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1753"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01753] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByIds@POLYN1062702 the MagicNumber/String  'The given topic id '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01754"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01754] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByIds@POLYN1062702 the MagicNumber/String  '' cannot be represented in a request.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01762"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1762"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01762] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByIds@POLYN1062702 the MagicNumber/String  'describeTopicsWithIds' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01769"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1769"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01769] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByIds@POLYN1062702 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01784"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1784"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01784] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByIds@POLYN1062702 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01785"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1785"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01785] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByIds@POLYN1062702 the MagicNumber/String  'TopicId ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01785"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1785"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01785] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByIds@POLYN1062702 the MagicNumber/String  ' not found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01789"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1789"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01789] In method org.apache.kafka.clients.admin.KafkaAdminClient.handleDescribeTopicsByIds@POLYN1062702 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01811"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1811"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01811] For method getTopicDescriptionFromCluster arguments Cluster  cluster|String  topicName|Uuid  topicId|Integer  authorizedOperations"
}} 
,
{ "ligne" : {
   "c1" : "01811"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1811"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01811] For method getTopicDescriptionFromCluster list of called methods Object monObjet|java.util.Set&lt;String&gt; cluster_internalTopicsN1066829|java.util.List&lt;org.apache.kafka.common.PartitionInfo&gt; cluster_partitionsForTopicN1066964"
}} 
,
{ "ligne" : {
   "c1" : "01811"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1811"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01811] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01817"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1817"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01817] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01826"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1826"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01826] For method leader arguments PartitionInfo  partitionInfo"
}} 
,
{ "ligne" : {
   "c1" : "01826"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1826"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01826] The argument partitionInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01827"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1827"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01827] The same method call partitionInfo.leader()Node.noNode() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "01827"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1827"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01827] In method org.apache.kafka.clients.admin.KafkaAdminClient.leader@POLYN1067968 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01828"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1828"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01828] In method org.apache.kafka.clients.admin.KafkaAdminClient.leader@POLYN1067968 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01833"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1833"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01833] For method describeCluster arguments DescribeClusterOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "01833"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1833"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01833] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01840"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1840"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01840] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeCluster@POLYN1068347 the MagicNumber/String  'listNodes' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1843"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01843] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeCluster@POLYN1068347 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01856"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1856"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01856] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeCluster@POLYN1068347 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01892"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1892"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01892] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeCluster@POLYN1068347 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01893"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01893] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeCluster@POLYN1068347 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01908"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1908"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01908] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeCluster@POLYN1068347 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01911"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1911"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01911] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeCluster@POLYN1068347 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01912"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1912"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01912] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeCluster@POLYN1068347 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01921"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1921"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01921] For method describeAcls arguments AclBindingFilter  filter|DescribeAclsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "01921"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1921"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01921] The argument filter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01921"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1921"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01921] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01924"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1924"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01924] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeAcls@POLYN1072802 the MagicNumber/String  'The AclBindingFilter ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01925"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1925"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01925] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeAcls@POLYN1072802 the MagicNumber/String  'must not contain UNKNOWN elements.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01930"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1930"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01930] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeAcls@POLYN1072802 the MagicNumber/String  'describeAcls' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01957"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1957"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01957] For method createAcls arguments Collection&lt;AclBinding &gt;  acls|CreateAclsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "01957"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1957"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01957] For method createAcls list of called methods Object monObjet|org.apache.kafka.clients.admin.CreateAclsResult acl_toFilterN1075670"
}} 
,
{ "ligne" : {
   "c1" : "01957"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1957"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01957] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01964"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1964"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01964] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01966"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1966"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01966] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01963"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1963"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01963] In method org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01967"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1967"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01967] In method org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01971"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1971"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01971] In method org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696 the MagicNumber/String  'Invalid ACL creation: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01977"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1977"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01977] In method org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696 the MagicNumber/String  'createAcls' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01994"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1994"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01994] In method org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696 the MagicNumber/String  'The broker reported no creation result for the given ACL: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02002"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2002"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02002] In method org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2016"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02016] For method deleteAcls arguments Collection&lt;AclBindingFilter &gt;  filters|DeleteAclsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2016"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[02016] For method deleteAcls list of called methods Object monObjet|org.apache.kafka.common.acl.AclBinding DeleteAclsResponse_aclBindingN1081553"
}} 
,
{ "ligne" : {
   "c1" : "02016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2016"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02016] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02022] In method org.apache.kafka.clients.admin.KafkaAdminClient.deleteAcls@POLYN1078342 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2029"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02029] In method org.apache.kafka.clients.admin.KafkaAdminClient.deleteAcls@POLYN1078342 the MagicNumber/String  'deleteAcls' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2046"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02046] In method org.apache.kafka.clients.admin.KafkaAdminClient.deleteAcls@POLYN1078342 the MagicNumber/String  'The broker reported no deletion result for the given filter.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2075"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02075] For method describeConfigs arguments Collection&lt;ConfigResource &gt;  configResources|DescribeConfigsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2075"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[02075] For method describeConfigs list of called methods Object monObjet|Integer nodeForN1082684"
}} 
,
{ "ligne" : {
   "c1" : "02075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2075"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02075] The argument configResources is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2075"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02075] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2081"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02081] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2093"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02093] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2094"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02094] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02114] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02115] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02115] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02116] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02117] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02118] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02143] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2083"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02083] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeConfigs@POLYN1082241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2096"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02096] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeConfigs@POLYN1082241 the MagicNumber/String  'describeConfigs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2097"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02097] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeConfigs@POLYN1082241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02107] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeConfigs@POLYN1082241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02120] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeConfigs@POLYN1082241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02121] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeConfigs@POLYN1082241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02122] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeConfigs@POLYN1082241 the MagicNumber/String  'The config {} in the response from broker {} is not in the request' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02125] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeConfigs@POLYN1082241 the MagicNumber/String  'The config {} in the response from the least loaded broker is not in the request' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02139] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeConfigs@POLYN1082241 the MagicNumber/String  'The broker response did not contain a result for config resource ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02154] For method describeConfigResult arguments DescribeConfigsResponseData.DescribeConfigsResult  describeConfigsResult"
}} 
,
{ "ligne" : {
   "c1" : "02154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2154"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02154] The argument describeConfigsResult is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02168] For method configSource arguments DescribeConfigsResponse.ConfigSource  source"
}} 
,
{ "ligne" : {
   "c1" : "02190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02190] In method org.apache.kafka.clients.admin.KafkaAdminClient.configSource@POLYN1088115 the MagicNumber/String  'Unexpected config source ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02197] For method alterConfigs arguments Map&lt;ConfigResource ,Config &gt;  configs|AlterConfigsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[02197] For method alterConfigs list of called methods Object monObjet|Integer nodeForN1089678"
}} 
,
{ "ligne" : {
   "c1" : "02197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2197"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02197] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02205] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02207] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02206] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterConfigs@POLYN1089165 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2217"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02217] For method alterConfigs arguments Map&lt;ConfigResource ,Config &gt;  configs|AlterConfigsOptions  options|Collection&lt;ConfigResource &gt;  resources|NodeProvider  nodeProvider"
}} 
,
{ "ligne" : {
   "c1" : "02217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2217"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02217] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2218"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02218] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2219"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02219] The argument resources is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02224] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02225"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02225] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02232] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterConfigs@POLYN1090620 the MagicNumber/String  'alterConfigs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02245] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterConfigs@POLYN1090620 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02248"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02248] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterConfigs@POLYN1090620 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2262"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02262] For method incrementalAlterConfigs arguments Map&lt;ConfigResource ,Collection&lt;AlterConfigOp &gt; &gt;  configs|AlterConfigsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2262"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[02262] For method incrementalAlterConfigs list of called methods Object monObjet|Integer nodeForN1094018"
}} 
,
{ "ligne" : {
   "c1" : "02262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2262"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02262] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02271] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02273] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02272] In method org.apache.kafka.clients.admin.KafkaAdminClient.incrementalAlterConfigs@POLYN1093484 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2284"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02284] For method incrementalAlterConfigs arguments Map&lt;ConfigResource ,Collection&lt;AlterConfigOp &gt; &gt;  configs|AlterConfigsOptions  options|Collection&lt;ConfigResource &gt;  resources|NodeProvider  nodeProvider"
}} 
,
{ "ligne" : {
   "c1" : "02284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2284"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[02284] For method incrementalAlterConfigs list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.config.ConfigResource,org.apache.kafka.common.requests.ApiError&gt; IncrementalAlterConfigsResponse_fromResponseDataN1096276|java.util.Map&lt;org.apache.kafka.common.config.ConfigResource,KafkaFutureImpl&lt;Void&gt;&gt; errors_getN1096646"
}} 
,
{ "ligne" : {
   "c1" : "02285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2285"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02285] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02293] In method org.apache.kafka.clients.admin.KafkaAdminClient.incrementalAlterConfigs@POLYN1094960 the MagicNumber/String  'incrementalAlterConfigs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02307] In method org.apache.kafka.clients.admin.KafkaAdminClient.incrementalAlterConfigs@POLYN1094960 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02310] In method org.apache.kafka.clients.admin.KafkaAdminClient.incrementalAlterConfigs@POLYN1094960 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2324"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02324] For method alterReplicaLogDirs arguments Map&lt;TopicPartitionReplica ,String &gt;  replicaAssignment|AlterReplicaLogDirsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2324"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[02324] For method alterReplicaLogDirs list of called methods Object monObjet|org.apache.kafka.clients.admin.AlterReplicaLogDirsResult replica_brokerIdN1098217|org.apache.kafka.clients.admin.AlterReplicaLogDirsResult time_millisecondsN1099420"
}} 
,
{ "ligne" : {
   "c1" : "02324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2324"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02324] The argument replicaAssignment is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2324"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02324] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02332"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02332] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02333] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02335"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02335] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02337] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02343"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02343] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02354] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02360] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02365] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02366] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02366] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02367] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02368] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02369"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02369] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02371"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02371] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02390] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02338"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02338] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterReplicaLogDirs@POLYN1097258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02344"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02344] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterReplicaLogDirs@POLYN1097258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02356"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02356] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterReplicaLogDirs@POLYN1097258 the MagicNumber/String  'alterReplicaLogDirs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02372"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02372] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterReplicaLogDirs@POLYN1097258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02373] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterReplicaLogDirs@POLYN1097258 the MagicNumber/String  'The partition {} in the response from broker {} is not in the request' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02377] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterReplicaLogDirs@POLYN1097258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02386] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterReplicaLogDirs@POLYN1097258 the MagicNumber/String  'The response from broker ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02387] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterReplicaLogDirs@POLYN1097258 the MagicNumber/String  ' did not contain a result for replica ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2405"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02405] For method describeLogDirs arguments Collection&lt;Integer &gt;  brokers|DescribeLogDirsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2405"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[02405] For method describeLogDirs list of called methods Object monObjet|java.util.Map&lt;String,org.apache.kafka.clients.admin.LogDirDescription&gt; logDirDescriptionsN1103840"
}} 
,
{ "ligne" : {
   "c1" : "02405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2405"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02405] The argument brokers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2405"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02405] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02410] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02417"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02417] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02423] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02424] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02424] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02425] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02430] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02437] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02413"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02413] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeLogDirs@POLYN1102394 the MagicNumber/String  'describeLogDirs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02419"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02419] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeLogDirs@POLYN1102394 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02426] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeLogDirs@POLYN1102394 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02446"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2446"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02446] For method logDirDescriptions arguments DescribeLogDirsResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "02446"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2446"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02446] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02449"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2449"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02449] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02450] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02451"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02451] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02451"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02451] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02467"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2467"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02467] For method describeReplicaLogDirs arguments Collection&lt;TopicPartitionReplica &gt;  replicas|DescribeReplicaLogDirsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02467"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2467"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[02467] For method describeReplicaLogDirs list of called methods Object monObjet|org.apache.kafka.clients.admin.DescribeReplicaLogDirsResult time_millisecondsN1107955"
}} 
,
{ "ligne" : {
   "c1" : "02467"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2467"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02467] The argument replicas is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02467"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2467"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02467] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02477] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02479"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02479] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02481"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02481] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02494"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02494] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02495] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02496] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02497"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2497"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02497] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02506"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02506] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02512"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2512"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02512] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02513"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02513] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02513"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02513] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02514"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02514] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2515"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02515] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02516] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02519"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02519] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02525] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02526] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02527"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2527"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02527] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02528"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2528"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02528] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02545"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2545"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02545] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02546"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2546"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02546] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02547] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02552"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2552"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02552] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02497"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2497"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02497] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02480] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeReplicaLogDirs@POLYN1106247 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02502"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02502] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeReplicaLogDirs@POLYN1106247 the MagicNumber/String  'describeReplicaLogDirs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2521"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02521] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeReplicaLogDirs@POLYN1106247 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02523"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02523] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeReplicaLogDirs@POLYN1106247 the MagicNumber/String  'The error ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02523"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02523] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeReplicaLogDirs@POLYN1106247 the MagicNumber/String  ' for log directory ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02523"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02523] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeReplicaLogDirs@POLYN1106247 the MagicNumber/String  ' in the response from broker ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02523"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02523] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeReplicaLogDirs@POLYN1106247 the MagicNumber/String  ' is illegal' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02529"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02529] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeReplicaLogDirs@POLYN1106247 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02530"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2530"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02530] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeReplicaLogDirs@POLYN1106247 the MagicNumber/String  'Server response from broker {} mentioned unknown partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02562"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2562"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02562] For method createPartitions arguments Map&lt;String ,NewPartitions &gt;  newPartitions|CreatePartitionsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02562"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2562"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[02562] For method createPartitions list of called methods Object monObjet|java.util.List&lt;List&lt;Integer&gt;&gt; newPartition_assignmentsN1113099|org.apache.kafka.clients.admin.CreatePartitionsResult time_millisecondsN1113947|long calcDeadlineMsN1114027|org.apache.kafka.clients.admin.KafkaAdminClient.Call getCreatePartitionsCallN1114160"
}} 
,
{ "ligne" : {
   "c1" : "02562"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2562"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02562] The argument newPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2563"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02563] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02567"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02567] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2568"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02568] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02569"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2569"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02569] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02570"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02570] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02570"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02570] In method org.apache.kafka.clients.admin.KafkaAdminClient.createPartitions@POLYN1112289 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02570"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02570] In method org.apache.kafka.clients.admin.KafkaAdminClient.createPartitions@POLYN1112289 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02590"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2590"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02590] For method getCreatePartitionsCall arguments CreatePartitionsOptions  options|Map&lt;String ,KafkaFutureImpl&lt;Void &gt; &gt;  futures|CreatePartitionsTopicCollection  topics|Map&lt;String ,ThrottlingQuotaExceededException &gt;  quotaExceededExceptions|long  now|long  deadline"
}} 
,
{ "ligne" : {
   "c1" : "02590"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2590"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[02590] For method getCreatePartitionsCall list of called methods Object monObjet|org.apache.kafka.clients.admin.KafkaAdminClient.Call time_millisecondsN1117625|org.apache.kafka.clients.admin.KafkaAdminClient.Call getCreatePartitionsCallN1117705"
}} 
,
{ "ligne" : {
   "c1" : "02590"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2590"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02590] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02591"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2591"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02591] The argument futures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02592"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2592"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02592] The argument topics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02596] In method org.apache.kafka.clients.admin.KafkaAdminClient.getCreatePartitionsCall@POLYN1114569 the MagicNumber/String  'createPartitions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02616"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2616"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02616] In method org.apache.kafka.clients.admin.KafkaAdminClient.getCreatePartitionsCall@POLYN1114569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02617"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2617"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02617] In method org.apache.kafka.clients.admin.KafkaAdminClient.getCreatePartitionsCall@POLYN1114569 the MagicNumber/String  'Server response mentioned unknown topic {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02634"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2634"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02634] In method org.apache.kafka.clients.admin.KafkaAdminClient.getCreatePartitionsCall@POLYN1114569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02642"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2642"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02642] In method org.apache.kafka.clients.admin.KafkaAdminClient.getCreatePartitionsCall@POLYN1114569 the MagicNumber/String  'The controller response did not contain a result for topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02664"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2664"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02664] For method deleteRecords arguments Map&lt;TopicPartition ,RecordsToDelete &gt;  recordsToDelete|DeleteRecordsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02664"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2664"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[02664] For method deleteRecords list of called methods Object monObjet|long calcDeadlineMsN1119382|org.apache.kafka.clients.admin.DeleteRecordsResult errors_getN1120803|org.apache.kafka.clients.admin.DeleteRecordsResult time_millisecondsN1122315"
}} 
,
{ "ligne" : {
   "c1" : "02664"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2664"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02664] The argument recordsToDelete is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02665"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2665"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02665] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02684"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2684"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02684] In method org.apache.kafka.clients.admin.KafkaAdminClient.deleteRecords@POLYN1118429 the MagicNumber/String  'topicsMetadata' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2691"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02691] In method org.apache.kafka.clients.admin.KafkaAdminClient.deleteRecords@POLYN1118429 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02713"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2713"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02713] In method org.apache.kafka.clients.admin.KafkaAdminClient.deleteRecords@POLYN1118429 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02717"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2717"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02717] In method org.apache.kafka.clients.admin.KafkaAdminClient.deleteRecords@POLYN1118429 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02737"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2737"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02737] In method org.apache.kafka.clients.admin.KafkaAdminClient.deleteRecords@POLYN1118429 the MagicNumber/String  'deleteRecords' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02786"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2786"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02786] For method createDelegationToken arguments CreateDelegationTokenOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02786"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2786"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02786] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02795"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2795"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02795] In method org.apache.kafka.clients.admin.KafkaAdminClient.createDelegationToken@POLYN1125270 the MagicNumber/String  'createDelegationToken' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02830"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2830"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02830] For method renewDelegationToken arguments byte[]  hmac|RenewDelegationTokenOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02830"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2830"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02830] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02833"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2833"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02833] In method org.apache.kafka.clients.admin.KafkaAdminClient.renewDelegationToken@POLYN1127775 the MagicNumber/String  'renewDelegationToken' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02864"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2864"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02864] For method expireDelegationToken arguments byte[]  hmac|ExpireDelegationTokenOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02864"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2864"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02864] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02867"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2867"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02867] In method org.apache.kafka.clients.admin.KafkaAdminClient.expireDelegationToken@POLYN1129311 the MagicNumber/String  'expireDelegationToken' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02898"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2898"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02898] For method describeDelegationToken arguments DescribeDelegationTokenOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02898"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2898"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02898] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02901"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2901"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02901] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeDelegationToken@POLYN1130847 the MagicNumber/String  'describeDelegationToken' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2928"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02928] For method rescheduleMetadataTask arguments MetadataOperationContext&lt;? ,? &gt;  context|Supplier&lt;List&lt;Call &gt; &gt;  nextCalls"
}} 
,
{ "ligne" : {
   "c1" : "02928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2928"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02928] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02929"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2929"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02929] In method org.apache.kafka.clients.admin.KafkaAdminClient.rescheduleMetadataTask@POLYN1132251 the MagicNumber/String  'Retrying to fetch metadata.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02937"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2937"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02937] For method describeConsumerGroups arguments Collection&lt;String &gt;  groupIds|DescribeConsumerGroupsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "02937"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2937"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[02937] For method describeConsumerGroups list of called methods Object monObjet|AdminApiFuture.SimpleAdminApiFuture&lt;org.apache.kafka.clients.admin.internals.CoordinatorKey,org.apache.kafka.clients.admin.ConsumerGroupDescription&gt; DescribeConsumerGroupsHandler_newFutureN1132999"
}} 
,
{ "ligne" : {
   "c1" : "02938"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2938"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02938] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02948"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2948"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02948] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02949"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2949"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02949] The argument nextCalls is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02950"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2950"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02950] In method org.apache.kafka.clients.admin.KafkaAdminClient the MagicNumber/String  'metadata' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02955"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2955"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02955] In method org.apache.kafka.clients.admin.KafkaAdminClient the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02979"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2979"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02979] For method validAclOperations arguments int  authorizedOperations"
}} 
,
{ "ligne" : {
   "c1" : "02981"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2981"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02981] In method org.apache.kafka.clients.admin.KafkaAdminClient.validAclOperations@POLYN1135523 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02992"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2992"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[02992] The class ListConsumerGroupsResults contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "03007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3007"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[03007] Lock statement on synchronized method addError"
}} 
,
{ "ligne" : {
   "c1" : "03007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3007"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03007] For method addError arguments Throwable  throwable|Node  node"
}} 
,
{ "ligne" : {
   "c1" : "03007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3007"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03007] For method addError list of called methods Object monObjet|org.apache.kafka.common.requests.ApiError ApiError_fromThrowableN1137111"
}} 
,
{ "ligne" : {
   "c1" : "03009"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3009"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[03009] The same method call error.message() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "03009"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3009"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03009] In method org.apache.kafka.clients.admin.KafkaAdminClient.ListConsumerGroupsResults.addError@POLYN1136993 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3010"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03010] In method org.apache.kafka.clients.admin.KafkaAdminClient.ListConsumerGroupsResults.addError@POLYN1136993 the MagicNumber/String  'Error listing groups on ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3012"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03012] In method org.apache.kafka.clients.admin.KafkaAdminClient.ListConsumerGroupsResults.addError@POLYN1136993 the MagicNumber/String  'Error listing groups on ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3012"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03012] In method org.apache.kafka.clients.admin.KafkaAdminClient.ListConsumerGroupsResults.addError@POLYN1136993 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3016"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[03016] Lock statement on synchronized method addListing"
}} 
,
{ "ligne" : {
   "c1" : "03016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3016"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03016] For method addListing arguments ConsumerGroupListing  listing"
}} 
,
{ "ligne" : {
   "c1" : "03016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3016"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03016] The argument listing is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3020"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[03020] Lock statement on synchronized method tryComplete"
}} 
,
{ "ligne" : {
   "c1" : "03020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3020"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03020] For method tryComplete arguments Node  leader"
}} 
,
{ "ligne" : {
   "c1" : "03025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3025"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[03025] Lock statement on synchronized method tryComplete"
}} 
,
{ "ligne" : {
   "c1" : "03035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3035"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03035] For method listConsumerGroups arguments ListConsumerGroupsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3035"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03035] For method listConsumerGroups list of called methods Object monObjet|long calcDeadlineMsN1138822|org.apache.kafka.clients.admin.ListConsumerGroupsResult time_millisecondsN1140107|java.util.Set&lt;ConsumerGroupState&gt; options_statesN1140506"
}} 
,
{ "ligne" : {
   "c1" : "03035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3035"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03035] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3039"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03039] In method org.apache.kafka.clients.admin.KafkaAdminClient.listConsumerGroups@POLYN1138509 the MagicNumber/String  'findAllBrokers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3044"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03044] In method org.apache.kafka.clients.admin.KafkaAdminClient.listConsumerGroups@POLYN1138509 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3052"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03052] In method org.apache.kafka.clients.admin.KafkaAdminClient.listConsumerGroups@POLYN1138509 the MagicNumber/String  'Metadata fetch failed due to missing broker list' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3059"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03059] In method org.apache.kafka.clients.admin.KafkaAdminClient.listConsumerGroups@POLYN1138509 the MagicNumber/String  'listConsumerGroups' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3073"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03073] In method org.apache.kafka.clients.admin.KafkaAdminClient.listConsumerGroups@POLYN1138509 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03112] In method org.apache.kafka.clients.admin.KafkaAdminClient.listConsumerGroups@POLYN1138509 the MagicNumber/String  'Failed to find brokers to send ListGroups' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03121] For method listConsumerGroupOffsets arguments String  groupId|ListConsumerGroupOffsetsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03121] For method listConsumerGroupOffsets list of called methods Object monObjet|AdminApiFuture.SimpleAdminApiFuture&lt;org.apache.kafka.clients.admin.internals.CoordinatorKey,Map&lt;TopicPartition,OffsetAndMetadata&gt;&gt; ListConsumerGroupOffsetsHandler_newFutureN1143685"
}} 
,
{ "ligne" : {
   "c1" : "03122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3122"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03122] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03131] For method deleteConsumerGroups arguments Collection&lt;String &gt;  groupIds|DeleteConsumerGroupsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03131] For method deleteConsumerGroups list of called methods Object monObjet|AdminApiFuture.SimpleAdminApiFuture&lt;org.apache.kafka.clients.admin.internals.CoordinatorKey,Void&gt; DeleteConsumerGroupsHandler_newFutureN1144372"
}} 
,
{ "ligne" : {
   "c1" : "03131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3131"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03131] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03141] For method deleteConsumerGroupOffsets arguments String  groupId|Set&lt;TopicPartition &gt;  partitions|DeleteConsumerGroupOffsetsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03141] For method deleteConsumerGroupOffsets list of called methods Object monObjet|AdminApiFuture.SimpleAdminApiFuture&lt;org.apache.kafka.clients.admin.internals.CoordinatorKey,Map&lt;TopicPartition,Errors&gt;&gt; DeleteConsumerGroupOffsetsHandler_newFutureN1145207"
}} 
,
{ "ligne" : {
   "c1" : "03144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3144"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03144] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03158] For method electLeaders arguments ElectionType  electionType|Set&lt;TopicPartition &gt;  topicPartitions|ElectLeadersOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03158] For method electLeaders list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.TopicPartition,Optional&lt;Throwable&gt;&gt; ElectLeadersResponse_electLeadersResultN1147024"
}} 
,
{ "ligne" : {
   "c1" : "03161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3161"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03161] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03164] In method org.apache.kafka.clients.admin.KafkaAdminClient.electLeaders@POLYN1145928 the MagicNumber/String  'electLeaders' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03197] For method alterPartitionReassignments arguments Map&lt;TopicPartition ,Optional&lt;NewPartitionReassignment &gt; &gt;  reassignments|AlterPartitionReassignmentsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03197] For method alterPartitionReassignments list of called methods Object monObjet|org.apache.kafka.clients.admin.AlterPartitionReassignmentsResult time_millisecondsN1150094"
}} 
,
{ "ligne" : {
   "c1" : "03198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3198"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03198] The argument reassignments is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3199"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03199] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03203] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03205] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03206] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03207] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03217] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03211] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  'The given topic name '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03212] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  '' cannot be represented in a request.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03213] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03214] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  'The given partition index ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03215] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  ' is not valid.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03219] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03229] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  'alterPartitionReassignments' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03249] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03266] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03284] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03293] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03294] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03303] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  'many' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03303] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  'less' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03304"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03304] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  'The server returned too ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03304"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03304] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  ' results.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03305] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  'Expected ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03305] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  ' but received ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03311] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03320"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03320] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03324] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1147770 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3345"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03345] For method listPartitionReassignments arguments Optional&lt;Set&lt;TopicPartition &gt; &gt;  partitions|ListPartitionReassignmentsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3345"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03345] For method listPartitionReassignments list of called methods Object monObjet|String tp_topicN1157345|int tp_partitionN1157420"
}} 
,
{ "ligne" : {
   "c1" : "03345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3345"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03345] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03346"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3346"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03346] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03350"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03350] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03353] In method org.apache.kafka.clients.admin.KafkaAdminClient.listPartitionReassignments@POLYN1156871 the MagicNumber/String  'The given topic name '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03354] In method org.apache.kafka.clients.admin.KafkaAdminClient.listPartitionReassignments@POLYN1156871 the MagicNumber/String  '' cannot be represented in a request.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03355"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03355] In method org.apache.kafka.clients.admin.KafkaAdminClient.listPartitionReassignments@POLYN1156871 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03356"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03356] In method org.apache.kafka.clients.admin.KafkaAdminClient.listPartitionReassignments@POLYN1156871 the MagicNumber/String  'The given partition index ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03357] In method org.apache.kafka.clients.admin.KafkaAdminClient.listPartitionReassignments@POLYN1156871 the MagicNumber/String  ' is not valid.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03364] In method org.apache.kafka.clients.admin.KafkaAdminClient.listPartitionReassignments@POLYN1156871 the MagicNumber/String  'listPartitionReassignments' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3425"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03425] For method handleNotControllerError arguments AbstractResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "03425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3425"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03425] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3431"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03431] For method handleNotControllerError arguments Errors  error"
}} 
,
{ "ligne" : {
   "c1" : "03431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3431"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03431] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03438"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3438"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03438] For method nodeFor arguments ConfigResource  resource"
}} 
,
{ "ligne" : {
   "c1" : "03438"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3438"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03438] The argument resource is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03443"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03443] In method org.apache.kafka.clients.admin.KafkaAdminClient.nodeFor@POLYN1161949 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03447"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3447"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03447] For method getMembersFromGroup arguments String  groupId|String  reason"
}} 
,
{ "ligne" : {
   "c1" : "03457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03457] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03452] In method org.apache.kafka.clients.admin.KafkaAdminClient.getMembersFromGroup@POLYN1162454 the MagicNumber/String  'Encounter exception when trying to get members from group: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03471"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3471"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03471] For method removeMembersFromConsumerGroup arguments String  groupId|RemoveMembersFromConsumerGroupOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03471"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3471"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03471] For method removeMembersFromConsumerGroup list of called methods Object monObjet|java.util.List&lt;MemberIdentity&gt; getMembersFromGroupN1164206|java.util.Set&lt;org.apache.kafka.clients.admin.MemberToRemove&gt; options_membersN1164332|AdminApiFuture.SimpleAdminApiFuture&lt;org.apache.kafka.clients.admin.internals.CoordinatorKey,Map&lt;MemberIdentity,Errors&gt;&gt; RemoveMembersFromConsumerGroupHandler_newFutureN1164677"
}} 
,
{ "ligne" : {
   "c1" : "03472"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3472"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03472] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03473"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03473] In method org.apache.kafka.clients.admin.KafkaAdminClient.removeMembersFromConsumerGroup@POLYN1163741 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3493"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03493] For method alterConsumerGroupOffsets arguments String  groupId|Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|AlterConsumerGroupOffsetsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3493"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03493] For method alterConsumerGroupOffsets list of called methods Object monObjet|AdminApiFuture.SimpleAdminApiFuture&lt;org.apache.kafka.clients.admin.internals.CoordinatorKey,Map&lt;TopicPartition,Errors&gt;&gt; AlterConsumerGroupOffsetsHandler_newFutureN1165464"
}} 
,
{ "ligne" : {
   "c1" : "03496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3496"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03496] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03506"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3506"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03506] For method listOffsets arguments Map&lt;TopicPartition ,OffsetSpec &gt;  topicPartitionOffsets|ListOffsetsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03506"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3506"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03506] For method listOffsets list of called methods Object monObjet|long calcDeadlineMsN1166801"
}} 
,
{ "ligne" : {
   "c1" : "03506"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3506"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03506] The argument topicPartitionOffsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03507"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3507"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03507] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3531"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03531] For method getListOffsetsCalls arguments MetadataOperationContext&lt;ListOffsetsResultInfo ,ListOffsetsOptions &gt;  context|Map&lt;TopicPartition ,OffsetSpec &gt;  topicPartitionOffsets|Map&lt;TopicPartition ,KafkaFutureImpl&lt;ListOffsetsResultInfo &gt; &gt;  futures"
}} 
,
{ "ligne" : {
   "c1" : "03531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3531"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03531] For method getListOffsetsCalls list of called methods Object monObjet|long getOffsetFromOffsetSpecN1168755|org.apache.kafka.common.Node clusterSnapshot_leaderForN1168978"
}} 
,
{ "ligne" : {
   "c1" : "03531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3531"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03531] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03532"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3532"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03532] The argument topicPartitionOffsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03533"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3533"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03533] The argument futures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03543] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03544"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3544"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03544] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03545"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3545"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03545] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3549"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03549] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03551"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3551"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03551] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03552"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3552"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03552] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03567"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03567] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03574"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03574] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03581"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3581"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03581] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03582"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03582] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03582"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03582] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03583"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3583"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03583] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03585"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3585"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03585] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03586"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03586] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03587"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03587] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03588"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3588"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03588] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03589"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3589"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03589] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03590"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3590"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03590] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03596] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03608"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3608"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03608] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03609"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3609"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03609] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03610"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03610] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03611"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3611"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03611] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03617"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3617"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03617] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03619"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3619"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03619] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03626"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3626"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03626] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3627"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03627] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3628"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03628] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03629"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3629"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03629] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03630"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3630"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03630] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03637"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3637"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03637] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03642"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3642"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03642] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03644"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3644"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03644] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03645"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3645"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03645] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03647"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3647"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03647] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03535"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3535"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03535] In method org.apache.kafka.clients.admin.KafkaAdminClient.getListOffsetsCalls@POLYN1167561 the MagicNumber/String  'No Metadata response' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03550"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3550"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03550] In method org.apache.kafka.clients.admin.KafkaAdminClient.getListOffsetsCalls@POLYN1167561 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03565"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3565"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03565] In method org.apache.kafka.clients.admin.KafkaAdminClient.getListOffsetsCalls@POLYN1167561 the MagicNumber/String  'listOffsets on broker ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03576"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03576] In method org.apache.kafka.clients.admin.KafkaAdminClient.getListOffsetsCalls@POLYN1167561 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03591"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3591"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03591] In method org.apache.kafka.clients.admin.KafkaAdminClient.getListOffsetsCalls@POLYN1167561 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03592"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3592"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03592] In method org.apache.kafka.clients.admin.KafkaAdminClient.getListOffsetsCalls@POLYN1167561 the MagicNumber/String  'Server response mentioned unknown topic partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03611"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3611"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03611] In method org.apache.kafka.clients.admin.KafkaAdminClient.getListOffsetsCalls@POLYN1167561 the MagicNumber/String  'The response from broker ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03612"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3612"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03612] In method org.apache.kafka.clients.admin.KafkaAdminClient.getListOffsetsCalls@POLYN1167561 the MagicNumber/String  ' did not contain a result for topic partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03639"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3639"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03639] In method org.apache.kafka.clients.admin.KafkaAdminClient.getListOffsetsCalls@POLYN1167561 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03651"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03651] In method org.apache.kafka.clients.admin.KafkaAdminClient.getListOffsetsCalls@POLYN1167561 the MagicNumber/String  'Broker ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03651"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03651] In method org.apache.kafka.clients.admin.KafkaAdminClient.getListOffsetsCalls@POLYN1167561 the MagicNumber/String  ' does not support MAX_TIMESTAMP offset spec' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03661"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3661"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03661] In method org.apache.kafka.clients.admin.KafkaAdminClient.getListOffsetsCalls@POLYN1167561 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03669"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3669"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03669] For method describeClientQuotas arguments ClientQuotaFilter  filter|DescribeClientQuotasOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03669"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3669"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03669] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03673"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3673"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03673] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeClientQuotas@POLYN1176711 the MagicNumber/String  'describeClientQuotas' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03697"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3697"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03697] For method alterClientQuotas arguments Collection&lt;ClientQuotaAlteration &gt;  entries|AlterClientQuotasOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03697"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3697"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03697] The argument entries is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03697"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3697"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03697] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03704"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3704"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03704] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterClientQuotas@POLYN1177965 the MagicNumber/String  'alterClientQuotas' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3728"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03728] For method describeUserScramCredentials arguments List&lt;String &gt;  users|DescribeUserScramCredentialsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3728"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03728] For method describeUserScramCredentials list of called methods Object monObjet|DescribeUserScramCredentialsResult data_errorCodeN1181257"
}} 
,
{ "ligne" : {
   "c1" : "03728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3728"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03728] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03731"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3731"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03731] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeUserScramCredentials@POLYN1179576 the MagicNumber/String  'describeUserScramCredentials' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03737"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3737"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03737] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeUserScramCredentials@POLYN1179576 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03741"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3741"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03741] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeUserScramCredentials@POLYN1179576 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03774"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3774"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03774] For method alterUserScramCredentials arguments List&lt;UserScramCredentialAlteration &gt;  alterations|AlterUserScramCredentialsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03774"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3774"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03774] For method alterUserScramCredentials list of called methods Object monObjet|String alteration_userN1183062|String alteration_userN1184301"
}} 
,
{ "ligne" : {
   "c1" : "03774"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3774"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03774] The argument alterations is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03775"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3775"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03775] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03783"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3783"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03783] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  'Username must not be empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03784"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3784"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03784] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  'Password must not be empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03785"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3785"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03785] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  'Unknown SCRAM mechanism' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03788"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3788"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03788] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03793"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3793"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03793] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03805"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3805"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03805] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03811"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3811"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03811] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03811"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3811"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03811] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03815"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3815"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03815] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03836"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3836"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03836] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  'alterUserScramCredentials' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03868"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3868"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03868] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03869"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3869"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03869] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  'Server response mentioned unknown user {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03875"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3875"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03875] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03881"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3881"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03881] In method org.apache.kafka.clients.admin.KafkaAdminClient.alterUserScramCredentials@POLYN1182001 the MagicNumber/String  'The broker response did not contain a result for user ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03893"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3893"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03893] For method getScramCredentialUpsertion arguments UserScramCredentialUpsertion  u"
}} 
,
{ "ligne" : {
   "c1" : "03902"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3902"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03902] For method getScramCredentialDeletion arguments UserScramCredentialDeletion  d"
}} 
,
{ "ligne" : {
   "c1" : "03906"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3906"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03906] For method getSaltedPasword arguments ScramMechanism  publicScramMechanism|byte[]  password|byte[]  salt|int  iterations"
}} 
,
{ "ligne" : {
   "c1" : "03906"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3906"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03906] The argument publicScramMechanism is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03912"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3912"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03912] For method describeFeatures arguments DescribeFeaturesOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03912"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3912"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03912] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03916"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3916"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03916] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeFeatures@POLYN1191393 the MagicNumber/String  'describeFeatures' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03925"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3925"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03925] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeFeatures@POLYN1191393 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3965"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[03965] For method updateFeatures arguments Map&lt;String ,FeatureUpdate &gt;  featureUpdates|UpdateFeaturesOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "03965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3965"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[03965] For method updateFeatures list of called methods Object monObjet|org.apache.kafka.clients.admin.UpdateFeaturesResult time_millisecondsN1195553"
}} 
,
{ "ligne" : {
   "c1" : "03965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3965"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03965] The argument featureUpdates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03966"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3966"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[03966] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "03973"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3973"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[03973] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "03968"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3968"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03968] In method org.apache.kafka.clients.admin.KafkaAdminClient.updateFeatures@POLYN1194560 the MagicNumber/String  'Feature updates can not be null or empty.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03975"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3975"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03975] In method org.apache.kafka.clients.admin.KafkaAdminClient.updateFeatures@POLYN1194560 the MagicNumber/String  'Provided feature can not be empty.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "03981"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#3981"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[03981] In method org.apache.kafka.clients.admin.KafkaAdminClient.updateFeatures@POLYN1194560 the MagicNumber/String  'updateFeatures' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4015"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04015] In method org.apache.kafka.clients.admin.KafkaAdminClient.updateFeatures@POLYN1194560 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4016"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04016] In method org.apache.kafka.clients.admin.KafkaAdminClient.updateFeatures@POLYN1194560 the MagicNumber/String  'Server response mentioned unknown feature {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4020"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04020] In method org.apache.kafka.clients.admin.KafkaAdminClient.updateFeatures@POLYN1194560 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4028"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04028] In method org.apache.kafka.clients.admin.KafkaAdminClient.updateFeatures@POLYN1194560 the MagicNumber/String  'The controller response did not contain a result for feature ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4052"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[04052] For method describeMetadataQuorum arguments DescribeMetadataQuorumOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "04052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4052"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[04052] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "04058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4058"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04058] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeMetadataQuorum@POLYN1199254 the MagicNumber/String  'describeMetadataQuorum' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4064"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04064] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeMetadataQuorum@POLYN1199254 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4065"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04065] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeMetadataQuorum@POLYN1199254 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4087"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04087] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeMetadataQuorum@POLYN1199254 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4088"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04088] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeMetadataQuorum@POLYN1199254 the MagicNumber/String  'DescribeMetadataQuorum received %d topics when 1 was expected' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4093"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04093] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeMetadataQuorum@POLYN1199254 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4095"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04095] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeMetadataQuorum@POLYN1199254 the MagicNumber/String  'DescribeMetadataQuorum received a topic with name %s when %s was expected' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04100] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeMetadataQuorum@POLYN1199254 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04101] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeMetadataQuorum@POLYN1199254 the MagicNumber/String  'DescribeMetadataQuorum received a topic %s with %d partitions when 1 was expected' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04106] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeMetadataQuorum@POLYN1199254 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04108] In method org.apache.kafka.clients.admin.KafkaAdminClient.describeMetadataQuorum@POLYN1199254 the MagicNumber/String  'DescribeMetadataQuorum received a single partition with index %d when %d was expected' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[04130] For method unregisterBroker arguments int  brokerId|UnregisterBrokerOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "04130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4130"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[04130] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "04133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04133] In method org.apache.kafka.clients.admin.KafkaAdminClient.unregisterBroker@POLYN1204443 the MagicNumber/String  'unregisterBroker' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04150] In method org.apache.kafka.clients.admin.KafkaAdminClient.unregisterBroker@POLYN1204443 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[04155] In method org.apache.kafka.clients.admin.KafkaAdminClient.unregisterBroker@POLYN1204443 the MagicNumber/String  'Unregister broker request for broker ID {} failed: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "04172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[04172] For method describeProducers arguments Collection&lt;TopicPartition &gt;  topicPartitions|DescribeProducersOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "04172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[04172] For method describeProducers list of called methods Object monObjet|AdminApiFuture.SimpleAdminApiFuture&lt;org.apache.kafka.common.TopicPartition,org.apache.kafka.clients.admin.DescribeProducersResult.PartitionProducerState&gt; DescribeProducersHandler_newFutureN1206577"
}} 
,
{ "ligne" : {
   "c1" : "04172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4172"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[04172] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "04181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[04181] For method describeTransactions arguments Collection&lt;String &gt;  transactionalIds|DescribeTransactionsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "04181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[04181] For method describeTransactions list of called methods Object monObjet|AdminApiFuture.SimpleAdminApiFuture&lt;org.apache.kafka.clients.admin.internals.CoordinatorKey,org.apache.kafka.clients.admin.TransactionDescription&gt; DescribeTransactionsHandler_newFutureN1207172"
}} 
,
{ "ligne" : {
   "c1" : "04181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4181"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[04181] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "04190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[04190] For method abortTransaction arguments AbortTransactionSpec  spec|AbortTransactionOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "04190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[04190] For method abortTransaction list of called methods Object monObjet|AdminApiFuture.SimpleAdminApiFuture&lt;org.apache.kafka.common.TopicPartition,Void&gt; AbortTransactionHandler_newFutureN1207724"
}} 
,
{ "ligne" : {
   "c1" : "04190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4190"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[04190] The argument spec is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "04190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4190"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[04190] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "04199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4199"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[04199] For method listTransactions arguments ListTransactionsOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "04199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4199"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[04199] For method listTransactions list of called methods Object monObjet|AllBrokersStrategy.AllBrokersFuture&lt;Collection&lt;TransactionListing&gt;&gt; ListTransactionsHandler_newFutureN1208337"
}} 
,
{ "ligne" : {
   "c1" : "04199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4199"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[04199] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "04208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4208"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[04208] For method fenceProducers arguments Collection&lt;String &gt;  transactionalIds|FenceProducersOptions  options"
}} 
,
{ "ligne" : {
   "c1" : "04208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4208"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[04208] For method fenceProducers list of called methods Object monObjet|AdminApiFuture.SimpleAdminApiFuture&lt;org.apache.kafka.clients.admin.internals.CoordinatorKey,org.apache.kafka.common.utils.ProducerIdAndEpoch&gt; FenceProducersHandler_newFutureN1208913"
}} 
,
{ "ligne" : {
   "c1" : "04208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4208"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[04208] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "04235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4235"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[04235] The argument driver is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "04241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4241"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[04241] The argument driver is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "04241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4241"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[04241] The argument spec is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "04282"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4282"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[04282] For method getOffsetFromOffsetSpec arguments OffsetSpec  offsetSpec"
}} 
,
{ "ligne" : {
   "c1" : "04294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#4294"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[04294] The argument subLevelErrors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.KafkaAdminClient.configureDefaultApiTimeoutMs@POLYN994732"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.KafkaAdminClient.KafkaAdminClient@POLYN992438"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.KafkaAdminClient.calcTimeoutMsRemainingAsInt@POLYN984194"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.KafkaAdminClient.getOffsetFromOffsetSpec@POLYN1212427"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.KafkaAdminClient.deleteAcls@POLYN1078342"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.KafkaAdminClient.rescheduleMetadataTask@POLYN1132251"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#514"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00514] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.configureDefaultApiTimeoutMs@POLYN994732 the MagicNumber/String 'The specified value of ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00515] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.configureDefaultApiTimeoutMs@POLYN994732 the MagicNumber/String ' must be no smaller than the value of ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00515] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.configureDefaultApiTimeoutMs@POLYN994732 the MagicNumber/String '.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#517"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00517] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.configureDefaultApiTimeoutMs@POLYN994732 the MagicNumber/String 'Overriding the default value for {} -{}- with the explicitly configured request timeout {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00495] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.KafkaAdminClient@POLYN992438 the MagicNumber/String '  MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#496"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00496] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.KafkaAdminClient@POLYN992438 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00497"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#497"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00497] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.KafkaAdminClient@POLYN992438 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#503"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00503] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.KafkaAdminClient@POLYN992438 the MagicNumber/String 'Kafka admin client initialized' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#529"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00529] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00530"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#530"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00530] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String 'The timeout cannot be negative.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#531"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00531] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String 365 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#535"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00535] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00538"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#538"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00538] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String 'Initiating close operation.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00540"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#540"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00540] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String 'Moving hard shutdown time forward.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#547"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00547] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String 'Hard shutdown time is already earlier than requested.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#553"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00553] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00554"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00554] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String 'Waiting for the I/O thread to exit. Hard shutdown in {} ms.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#563"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00563] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String 'Kafka admin client closed.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#565"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00565] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.close@POLYN995633 the MagicNumber/String 'Interrupted while joining I/O thread' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01963"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1963"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01963] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01967"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1967"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01967] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01971"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1971"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01971] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696 the MagicNumber/String 'Invalid ACL creation: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01977"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1977"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01977] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696 the MagicNumber/String 'createAcls' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01994"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#1994"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01994] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696 the MagicNumber/String 'The broker reported no creation result for the given ACL: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "02002"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2002"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[02002] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.createAcls@POLYN1074696 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "02022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2022"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[02022] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.deleteAcls@POLYN1078342 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "02029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[02029] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.deleteAcls@POLYN1078342 the MagicNumber/String 'deleteAcls' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "02046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2046"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[02046] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.deleteAcls@POLYN1078342 the MagicNumber/String 'The broker reported no deletion result for the given filter.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "02929"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/KafkaAdminClient.java.html#2929"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[02929] In the recursive method org.apache.kafka.clients.admin.KafkaAdminClient.rescheduleMetadataTask@POLYN1132251 the MagicNumber/String 'Retrying to fetch metadata.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
