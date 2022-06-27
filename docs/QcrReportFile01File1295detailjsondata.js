console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java 52 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.AclControlManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.AclControlManager" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AclControlManager"
 , "c2" : "AclControlManager(SnapshotRegistry;Optional<ClusterMetadataAuthorizer>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<List<AclCreateResult>>"
 , "c2" : "createAcls(List<AclBinding>)"
 , "c3" : "3"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "Uuid"
 , "c2" : "newAclId()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateNewAcl(AclBinding)"
 , "c3" : "9"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<List<AclDeleteResult>>"
 , "c2" : "deleteAcls(List<AclBindingFilter>)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "AclDeleteResult"
 , "c2" : "deleteAclsForFilter(AclBindingFilter;Set<ApiMessageAndVersion>)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateFilter(AclBindingFilter)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "replay(AccessControlEntryRecord;Optional<OffsetAndEpoch>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "replay(RemoveAccessControlEntryRecord;Optional<OffsetAndEpoch>)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Map<Uuid,StandardAcl>"
 , "c2" : "idToAcl()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<List<ApiMessageAndVersion>>"
 , "c2" : "iterator(long)"
 , "c3" : "1"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.svg" }

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
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "11"
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
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00040] The class AclControlManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.controller.AclControlManager.AclControlManager@POLYN198428 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.controller.AclControlManager.AclControlManager@POLYN198428 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method createAcls arguments List&lt;AclBinding &gt;  acls"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00052] For method createAcls list of called methods Object monObjet|org.apache.kafka.metadata.authorizer.StandardAcl StandardAcl_fromAclBindingN199870"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument acls is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00058] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00059] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00059] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00059] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00064] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00066] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.controller.AclControlManager.createAcls@POLYN198918 the MagicNumber/String  'Unknown error while trying to create ACL' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.controller.AclControlManager.createAcls@POLYN198918 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.controller.AclControlManager.createAcls@POLYN198918 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00075] For method newAclId list of called methods Object monObjet|org.apache.kafka.common.Uuid Uuid_randomUuidN200774"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method validateNewAcl arguments AclBinding  binding"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument binding is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.controller.AclControlManager.validateNewAcl@POLYN200927 the MagicNumber/String  'Invalid resourceType ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.controller.AclControlManager.validateNewAcl@POLYN200927 the MagicNumber/String  'Invalid patternType ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.controller.AclControlManager.validateNewAcl@POLYN200927 the MagicNumber/String  'Invalid operation ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.controller.AclControlManager.validateNewAcl@POLYN200927 the MagicNumber/String  'Invalid permissionType ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method deleteAcls arguments List&lt;AclBindingFilter &gt;  filters"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00124] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00126] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#133"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00133] For method deleteAclsForFilter arguments AclBindingFilter  filter|Set&lt;ApiMessageAndVersion &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#133"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00133] For method deleteAclsForFilter list of called methods Object monObjet|org.apache.kafka.server.authorizer.AclDeleteResult acl_toBindingN203869"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#133"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00133] The argument filter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#134"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00134] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00137] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00138] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.controller.AclControlManager.deleteAclsForFilter@POLYN203340 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method validateFilter arguments AclBindingFilter  filter"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#149"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00149] The argument filter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.controller.AclControlManager.validateFilter@POLYN204398 the MagicNumber/String  'Unknown patternFilter.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.controller.AclControlManager.validateFilter@POLYN204398 the MagicNumber/String  'Unknown entryFilter.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00158] For method replay arguments AccessControlEntryRecord  record|Optional&lt;OffsetAndEpoch &gt;  snapshotId"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00158] For method replay list of called methods Object monObjet|org.apache.kafka.metadata.authorizer.StandardAclWithId StandardAclWithId_fromRecordN204930"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#159"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00159] The argument snapshotId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00170] For method replay arguments RemoveAccessControlEntryRecord  record|Optional&lt;OffsetAndEpoch &gt;  snapshotId"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#170"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00170] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#171"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00171] The argument snapshotId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.controller.AclControlManager.replay@POLYN205520 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.controller.AclControlManager.replay@POLYN205520 the MagicNumber/String  'Unable to replay ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.controller.AclControlManager.replay@POLYN205520 the MagicNumber/String  ': no acl with ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.controller.AclControlManager.replay@POLYN205520 the MagicNumber/String  'that ID found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.controller.AclControlManager.replay@POLYN205520 the MagicNumber/String  'Unable to replay ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.controller.AclControlManager.replay@POLYN205520 the MagicNumber/String  ' for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.controller.AclControlManager.replay@POLYN205520 the MagicNumber/String  ': acl not found ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.controller.AclControlManager.replay@POLYN205520 the MagicNumber/String  'in existingAcls.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/AclControlManager.java.html#192"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00192] For method iterator arguments long  epoch"
}} 
]
};
console.log('leListeStr 99 main end');
