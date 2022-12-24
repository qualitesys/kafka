console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java 172 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.ClusterControlManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.ClusterControlManager" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00241"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#241"
 , "c1" : "ClusterControlManager"
 , "c2" : "ClusterControlManager(LogContext;String;Time;SnapshotRegistry;long;ReplicaPlacer;ControllerMetrics;FeatureControlManager)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00264"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#264"
 , "c1" : "ReplicaPlacer"
 , "c2" : "replicaPlacer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00271"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#271"
 , "c1" : "void"
 , "c2" : "activate()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00281"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#281"
 , "c1" : "void"
 , "c2" : "deactivate()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00285"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#285"
 , "c1" : "Map<Integer,BrokerRegistration>"
 , "c2" : "brokerRegistrations()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00289"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#289"
 , "c1" : "Map<Integer,Map<String,VersionRange>>"
 , "c2" : "brokerSupportedVersions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00296"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#296"
 , "c1" : "Set<Integer>"
 , "c2" : "fencedBrokerIds()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00307"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#307"
 , "c1" : "ControllerResult<BrokerRegistrationReply>"
 , "c2" : "registerBroker(BrokerRegistrationRequestData;long;FinalizedControllerFeatures)"
 , "c3" : "13"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00369"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#369"
 , "c1" : "void"
 , "c2" : "replay(RegisterBrokerRecord)"
 , "c3" : "9"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00403"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#403"
 , "c1" : "void"
 , "c2" : "replay(UnregisterBrokerRecord)"
 , "c3" : "6"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00420"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#420"
 , "c1" : "void"
 , "c2" : "replay(FenceBrokerRecord)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00430"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#430"
 , "c1" : "void"
 , "c2" : "replay(UnfenceBrokerRecord)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00440"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#440"
 , "c1" : "void"
 , "c2" : "replay(BrokerRegistrationChangeRecord)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00458"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#458"
 , "c1" : "void"
 , "c2" : "replayRegistrationChange(ApiMessage;int;long;Optional<Boolean>;Optional<Boolean>)"
 , "c3" : "10"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00493"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#493"
 , "c1" : "void"
 , "c2" : "updateMetrics(BrokerRegistration;BrokerRegistration)"
 , "c3" : "12"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00522"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#522"
 , "c1" : "Iterator<UsableBroker>"
 , "c2" : "usableBrokers()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00534"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#534"
 , "c1" : "boolean"
 , "c2" : "unfenced(int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00546"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#546"
 , "c1" : "BrokerRegistration"
 , "c2" : "registration(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00554"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#554"
 , "c1" : "boolean"
 , "c2" : "inControlledShutdown(int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00564"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#564"
 , "c1" : "boolean"
 , "c2" : "active(int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00570"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#570"
 , "c1" : "BrokerHeartbeatManager"
 , "c2" : "heartbeatManager()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00577"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#577"
 , "c1" : "void"
 , "c2" : "checkBrokerEpoch(int;long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00589"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#589"
 , "c1" : "void"
 , "c2" : "addReadyBrokersFuture(CompletableFuture<Void>;int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00646"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#646"
 , "c1" : "ClusterControlIterator"
 , "c2" : "iterator(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "39"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "82"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "23"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method setLogContext arguments LogContext  logContext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method setClusterId arguments String  clusterId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method setTime arguments Time  time"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method setSnapshotRegistry arguments SnapshotRegistry  snapshotRegistry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method setSessionTimeoutNs arguments long  sessionTimeoutNs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method setReplicaPlacer arguments ReplicaPlacer  replicaPlacer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method setControllerMetrics arguments ControllerMetrics  controllerMetrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method setFeatureControlManager arguments FeatureControlManager  featureControl"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00131] For method build list of called methods Object monObjet|org.apache.kafka.common.Uuid Uuid_randomUuidN245410"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.controller.ClusterControlManager.Builder.build@POLYN245114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.controller.ClusterControlManager.Builder.build@POLYN245114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.controller.ClusterControlManager.Builder.build@POLYN245114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.controller.ClusterControlManager.Builder.build@POLYN245114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.controller.ClusterControlManager.Builder.build@POLYN245114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.controller.ClusterControlManager.Builder.build@POLYN245114 the MagicNumber/String  'You must specify ControllerMetrics' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.controller.ClusterControlManager.Builder.build@POLYN245114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.controller.ClusterControlManager.Builder.build@POLYN245114 the MagicNumber/String  'You must specify FeatureControlManager' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.controller.ClusterControlManager.ReadyBrokersFuture.check@POLYN246729 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.controller.ClusterControlManager.ReadyBrokersFuture.check@POLYN246729 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.controller.ClusterControlManager.ReadyBrokersFuture.check@POLYN246729 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#242"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00242] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.controller.ClusterControlManager.ClusterControlManager@POLYN248229 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.controller.ClusterControlManager.ClusterControlManager@POLYN248229 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.controller.ClusterControlManager.activate@POLYN249433 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.controller.ClusterControlManager.deactivate@POLYN249911 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#307"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00307] For method registerBroker arguments BrokerRegistrationRequestData  request|long  brokerEpoch|FinalizedControllerFeatures  finalizedFeatures"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#307"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00307] For method registerBroker list of called methods Object monObjet|V brokerRegistrations_getN251536|java.util.Optional finalizedFeatures_getN253108"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00308"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#308"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00308] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#310"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00310] The argument finalizedFeatures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00346] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String  'ClusterControlManager is not active.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String  'Expected cluster ID ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String  ', but got cluster ID ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String  'Another broker is ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String  'registered with that broker id.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String  'Unable to register because ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00350"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String  'the broker has an unsupported version of ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String  'Broker registered with feature {} that is unknown to the controller' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#369"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00369] For method replay arguments RegisterBrokerRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#369"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00369] For method replay list of called methods Object monObjet|V brokerRegistrations_putN255665"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#369"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00369] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569 the MagicNumber/String  'Registered new broker: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569 the MagicNumber/String  'Re-registered broker incarnation: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00399"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569 the MagicNumber/String  'Re-registered broker id {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#403"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00403] For method replay arguments UnregisterBrokerRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#403"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00403] For method replay list of called methods Object monObjet|V brokerRegistrations_getN257222"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#403"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00403] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String  'Unable to replay %s: no broker ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00408"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String  'registration found for that id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String  'Unable to replay %s: no broker ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00411"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00411] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String  'registration with that epoch found' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00416"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String  'Unregistered broker: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#420"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00420] For method replay arguments FenceBrokerRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#420"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00420] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#430"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00430] For method replay arguments UnfenceBrokerRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#430"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00430] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#440"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00440] For method replay arguments BrokerRegistrationChangeRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#440"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00440] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00443"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN258887 the MagicNumber/String  'Unable to replay %s: unknown ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN258887 the MagicNumber/String  'value for fenced field: %d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00447"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN258887 the MagicNumber/String  'Unable to replay %s: unknown ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.controller.ClusterControlManager.replay@POLYN258887 the MagicNumber/String  'value for inControlledShutdown field: %d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00458"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#458"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00458] For method replayRegistrationChange arguments ApiMessage  record|int  brokerId|long  brokerEpoch|Optional&lt;Boolean &gt;  fencingChange|Optional&lt;Boolean &gt;  inControlledShutdownChange"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00458"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#458"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00458] For method replayRegistrationChange list of called methods Object monObjet|V brokerRegistrations_getN260114|org.apache.kafka.metadata.BrokerRegistration curRegistration_cloneWithN260747"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00459"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#459"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00459] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00466"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#466"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00466] In method org.apache.kafka.controller.ClusterControlManager.replayRegistrationChange@POLYN259879 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00467"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#467"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00467] In method org.apache.kafka.controller.ClusterControlManager.replayRegistrationChange@POLYN259879 the MagicNumber/String  'Unable to replay %s: no broker ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00468"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.controller.ClusterControlManager.replayRegistrationChange@POLYN259879 the MagicNumber/String  'registration found for that id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00470"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.controller.ClusterControlManager.replayRegistrationChange@POLYN259879 the MagicNumber/String  'Unable to replay %s: no broker ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00471"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.controller.ClusterControlManager.replayRegistrationChange@POLYN259879 the MagicNumber/String  'registration with that epoch found' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00481"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00481] In method org.apache.kafka.controller.ClusterControlManager.replayRegistrationChange@POLYN259879 the MagicNumber/String  'Ignoring no-op registration change for {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00483"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.controller.ClusterControlManager.replayRegistrationChange@POLYN259879 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00486"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00486] In method org.apache.kafka.controller.ClusterControlManager.replayRegistrationChange@POLYN259879 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00493"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#493"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00493] For method updateMetrics arguments BrokerRegistration  prevRegistration|BrokerRegistration  registration"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00494"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00494] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00496"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00498"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00500"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  'Removed broker: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00501"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00503"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00503] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00504"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  'Added new fenced broker: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00506"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00506] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00507"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#507"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00507] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  'Added new unfenced broker: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00511"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00512"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#512"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00512] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00513"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  'Unfenced broker: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00515"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#515"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00515] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00517"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#517"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00517] In method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String  'Fenced broker: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00523"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00523] In method org.apache.kafka.controller.ClusterControlManager.usableBrokers@POLYN263942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00524"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#524"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00524] In method org.apache.kafka.controller.ClusterControlManager.usableBrokers@POLYN263942 the MagicNumber/String  'ClusterControlManager is not active.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00534"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#534"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00534] For method unfenced arguments int  brokerId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00534"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#534"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00534] For method unfenced list of called methods Object monObjet|V brokerRegistrations_getN264487"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00536"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#536"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00536] In method org.apache.kafka.controller.ClusterControlManager.unfenced@POLYN264390 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00536"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#536"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00536] In method org.apache.kafka.controller.ClusterControlManager.unfenced@POLYN264390 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00546"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#546"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00546] For method registration arguments int  brokerId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00554"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#554"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00554] For method inControlledShutdown arguments int  brokerId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00554"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#554"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00554] For method inControlledShutdown list of called methods Object monObjet|V brokerRegistrations_getN265187"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00556"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#556"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00556] In method org.apache.kafka.controller.ClusterControlManager.inControlledShutdown@POLYN265090 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00556"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#556"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00556] In method org.apache.kafka.controller.ClusterControlManager.inControlledShutdown@POLYN265090 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00564"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#564"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00564] For method active arguments int  brokerId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00564"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#564"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00564] For method active list of called methods Object monObjet|V brokerRegistrations_getN265621"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00566"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#566"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00566] In method org.apache.kafka.controller.ClusterControlManager.active@POLYN265524 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00566"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#566"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00566] In method org.apache.kafka.controller.ClusterControlManager.active@POLYN265524 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00571"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#571"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00571] In method org.apache.kafka.controller.ClusterControlManager.heartbeatManager@POLYN265894 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00572"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#572"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00572] In method org.apache.kafka.controller.ClusterControlManager.heartbeatManager@POLYN265894 the MagicNumber/String  'ClusterControlManager is not active.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00577"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#577"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00577] For method checkBrokerEpoch arguments int  brokerId|long  brokerEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00577"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#577"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00577] For method checkBrokerEpoch list of called methods Object monObjet|V brokerRegistrations_getN266239"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00579"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#579"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00579] In method org.apache.kafka.controller.ClusterControlManager.checkBrokerEpoch@POLYN266121 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00580"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00580] In method org.apache.kafka.controller.ClusterControlManager.checkBrokerEpoch@POLYN266121 the MagicNumber/String  'No broker registration found for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00581"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#581"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00581] In method org.apache.kafka.controller.ClusterControlManager.checkBrokerEpoch@POLYN266121 the MagicNumber/String  'broker id ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00584"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#584"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00584] In method org.apache.kafka.controller.ClusterControlManager.checkBrokerEpoch@POLYN266121 the MagicNumber/String  'Expected broker epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00585"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#585"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00585] In method org.apache.kafka.controller.ClusterControlManager.checkBrokerEpoch@POLYN266121 the MagicNumber/String  ', but got broker epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00589"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#589"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00589] For method addReadyBrokersFuture arguments CompletableFuture&lt;Void &gt;  future|int  minBrokers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00589"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#589"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00589] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00592"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#592"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00592] In method org.apache.kafka.controller.ClusterControlManager.addReadyBrokersFuture@POLYN266753 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00636"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#636"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00636] In method org.apache.kafka.controller.ClusterControlManager.ClusterControlIterator.next@POLYN267942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00646"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#646"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00646] For method iterator arguments long  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00420] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00430] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00440] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ClusterControlManager.ClusterControlIterator.next@POLYN267942"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00406] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#407"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00407] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String 'Unable to replay %s: no broker ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00408"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00408] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String 'registration found for that id' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00410] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String 'Unable to replay %s: no broker ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00411"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#411"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00411] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String 'registration with that epoch found' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#413"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00413] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00416"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00416] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN257054 the MagicNumber/String 'Unregistered broker: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00494"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#494"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00494] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00496"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#496"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00496] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00498"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#498"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00498] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00500"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#500"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00500] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 'Removed broker: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00501"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#501"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00501] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00503"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#503"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00503] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00504"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00504] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 'Added new fenced broker: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00506"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#506"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00506] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00507"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#507"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00507] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 'Added new unfenced broker: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00511"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00511] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00512"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#512"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00512] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00513"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00513] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 'Unfenced broker: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00515"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00515] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00516] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00517"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#517"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00517] In the recursive method org.apache.kafka.controller.ClusterControlManager.updateMetrics@POLYN261742 the MagicNumber/String 'Fenced broker: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00390] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#391"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00391] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00394] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00395] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569 the MagicNumber/String 'Registered new broker: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#397"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00397] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569 the MagicNumber/String 'Re-registered broker incarnation: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00399"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00399] In the recursive method org.apache.kafka.controller.ClusterControlManager.replay@POLYN254569 the MagicNumber/String 'Re-registered broker id {}: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00636"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#636"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00636] In the recursive method org.apache.kafka.controller.ClusterControlManager.ClusterControlIterator.next@POLYN267942 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#311"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00311] In the recursive method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#312"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00312] In the recursive method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String 'ClusterControlManager is not active.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00315] In the recursive method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String 'Expected cluster ID ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00316] In the recursive method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String ', but got cluster ID ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00320] In the recursive method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#323"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00323] In the recursive method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String 'Another broker is ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00324] In the recursive method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String 'registered with that broker id.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00349] In the recursive method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String 'Unable to register because ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00350"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#350"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00350] In the recursive method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String 'the broker has an unsupported version of ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.html#353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00353] In the recursive method org.apache.kafka.controller.ClusterControlManager.registerBroker@POLYN250884 the MagicNumber/String 'Broker registered with feature {} that is unknown to the controller' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ClusterControlManager.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
